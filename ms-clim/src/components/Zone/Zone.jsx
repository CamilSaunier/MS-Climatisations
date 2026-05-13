import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import "./Zone.css";

// Fix Leaflet's default marker icons broken by Vite's asset pipeline
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const DEPTS = {
  "54": { nom: "Meurthe-et-Moselle", couleur: "#1890d0" },
  "88": { nom: "Vosges", couleur: "#e87020" },
};

function styleDept(feature) {
  const code = feature.properties.code;
  if (code === "54") return { fillColor: "#1890d0", fillOpacity: 0.3, color: "#ffffff", weight: 2 };
  if (code === "88") return { fillColor: "#e87020", fillOpacity: 0.3, color: "#ffffff", weight: 2 };
  return { fillColor: "#b8c9de", fillOpacity: 0.12, color: "#ffffff", weight: 0.5 };
}

// Vole vers les coordonnées quand elles changent
function FlyTo({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) map.flyTo(coords, 16, { duration: 1.4 });
  }, [coords, map]);
  return null;
}

function Zone() {
  const [geoData, setGeoData] = useState(null);
  const [adresse, setAdresse] = useState("");
  const [chargement, setChargement] = useState(false);
  const [resultat, setResultat] = useState(null);
  const [markerPos, setMarkerPos] = useState(null);

  useEffect(() => {
    fetch("/data/departements.geojson")
      .then((r) => r.json())
      .then((data) =>
        setGeoData({
          ...data,
          features: data.features.filter((f) => parseInt(f.properties.code) <= 95),
        })
      );
  }, []);

  async function verifier(e) {
    e.preventDefault();
    if (!adresse.trim()) return;
    setChargement(true);
    setResultat(null);
    setMarkerPos(null);
    try {
      const res = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(adresse)}&limit=1`
      );
      const json = await res.json();
      if (!json.features?.length) {
        setResultat({ type: "erreur", msg: "Adresse introuvable. Vérifiez votre saisie." });
        return;
      }
      const feat = json.features[0];
      const [lng, lat] = feat.geometry.coordinates;
      const code = feat.properties.context?.split(",")[0]?.trim();
      setMarkerPos([lat, lng]);
      if (DEPTS[code]) {
        setResultat({ type: "ok", code, label: feat.properties.label });
      } else {
        setResultat({ type: "hors", label: feat.properties.label });
      }
    } catch {
      setResultat({ type: "erreur", msg: "Connexion impossible. Réessayez." });
    } finally {
      setChargement(false);
    }
  }

  return (
    <section id="zone" className="section section--alt zone">
      <div className="container">
        <div className="section-header zone__header">
          <span className="section-label">Couverture géographique</span>
          <h2 className="section-title">Zone d'intervention</h2>
          <p className="section-subtitle">
            Frigoriste certifié, j'interviens dans les <strong>Vosges (88)</strong> et en{" "}
            <strong>Meurthe-et-Moselle (54)</strong>. Entrez votre adresse pour vérifier votre zone.
          </p>
        </div>

        <div className="zone__corps">
          {/* ── Carte Leaflet ── */}
          <div className="zone__map-wrap">
            <MapContainer
              center={[48.1, 6.3]}
              zoom={8}
              style={{ width: "100%", height: "100%" }}
              scrollWheelZoom
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              {geoData && <GeoJSON data={geoData} style={styleDept} />}
              {markerPos && (
                <>
                  <Marker position={markerPos}>
                    <Popup>{resultat?.label}</Popup>
                  </Marker>
                  <FlyTo coords={markerPos} />
                </>
              )}
            </MapContainer>
          </div>

          {/* ── Panneau latéral ── */}
          <div className="zone__panneau">
            <div className="zone__bloc">
              <h3 className="zone__bloc-titre">Départements couverts</h3>
              {Object.entries(DEPTS).map(([code, { nom, couleur }]) => (
                <div key={code} className="zone__legende-item">
                  <span className="zone__puce" style={{ background: couleur }} />
                  <div>
                    <strong>{nom}</strong>
                    <span className="zone__dept-code"> — {code}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="zone__bloc">
              <h3 className="zone__bloc-titre">
                <AcUnitIcon fontSize="small" />
                Vérifiez votre adresse
              </h3>
              <form onSubmit={verifier} className="zone__form">
                <div className="zone__input-wrap">
                  <input
                    type="text"
                    className="zone__input"
                    placeholder="Ex : 12 rue des Lilas, Épinal"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary zone__btn"
                    disabled={chargement || !adresse.trim()}
                  >
                    {chargement ? <span className="zone__spinner" /> : <SearchIcon fontSize="small" />}
                  </button>
                </div>
              </form>

              {resultat && (
                <div className={`zone__resultat zone__resultat--${resultat.type}`}>
                  {resultat.type === "ok" && (
                    <>
                      <CheckCircleIcon fontSize="small" className="zone__r-icon" />
                      <div>
                        <strong>Zone couverte !</strong>
                        <p>{resultat.label}</p>
                        <p>{DEPTS[resultat.code].nom} ({resultat.code})</p>
                      </div>
                    </>
                  )}
                  {resultat.type === "hors" && (
                    <>
                      <WarningAmberIcon fontSize="small" className="zone__r-icon" />
                      <div>
                        <strong>Hors zone directe</strong>
                        <p>{resultat.label}</p>
                        <p>Contactez-moi, je pourrai peut-être intervenir.</p>
                      </div>
                    </>
                  )}
                  {resultat.type === "erreur" && (
                    <>
                      <WarningAmberIcon fontSize="small" className="zone__r-icon" />
                      <span>{resultat.msg}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Zone;
