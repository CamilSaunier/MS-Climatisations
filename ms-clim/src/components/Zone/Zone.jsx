import { useState, useRef } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import "./Zone.css";

const DEPTS = {
  "54": { nom: "Meurthe-et-Moselle", couleur: "#1890d0", hover: "#0f7ab5" },
  "88": { nom: "Vosges", couleur: "#e87020", hover: "#c85e10" },
};

const GEO_URL = "/data/departements.geojson";

const PROJ = { center: [2.5, 46.5], scale: 2700 };

function fill(code) {
  return DEPTS[code]?.couleur ?? "#dde5f0";
}
function fillHover(code) {
  return DEPTS[code]?.hover ?? "#c8d4e6";
}

function Zone() {
  const [adresse, setAdresse] = useState("");
  const [chargement, setChargement] = useState(false);
  const [resultat, setResultat] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const mapRef = useRef(null);

  async function verifier(e) {
    e.preventDefault();
    if (!adresse.trim()) return;
    setChargement(true);
    setResultat(null);
    try {
      const res = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(adresse)}&limit=1`
      );
      const json = await res.json();
      if (!json.features?.length) {
        setResultat({ type: "erreur", msg: "Adresse introuvable. Vérifiez votre saisie." });
        return;
      }
      const props = json.features[0].properties;
      const code = props.context?.split(",")[0]?.trim();
      if (DEPTS[code]) {
        setResultat({ type: "ok", code, label: props.label });
      } else {
        setResultat({ type: "hors", label: props.label });
      }
    } catch {
      setResultat({ type: "erreur", msg: "Connexion impossible. Réessayez." });
    } finally {
      setChargement(false);
    }
  }

  function onMouseEnter(e, nom, code) {
    const rect = mapRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip({ texte: `${nom} (${code})`, x: e.clientX - rect.left + 14, y: e.clientY - rect.top - 38 });
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
          {/* ── Carte ── */}
          <div className="zone__map-wrap" ref={mapRef}>
            {tooltip && (
              <div className="zone__tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
                {tooltip.texte}
              </div>
            )}
            <ComposableMap
              projection="geoMercator"
              projectionConfig={PROJ}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies
                    .filter((geo) => parseInt(geo.properties.code) <= 95)
                    .map((geo) => {
                      const { code, nom } = geo.properties;
                      const couvert = !!DEPTS[code];
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={fill(code)}
                          stroke="#ffffff"
                          strokeWidth={couvert ? 1.5 : 0.4}
                          style={{
                            default: { outline: "none" },
                            hover: { fill: fillHover(code), outline: "none", cursor: "default" },
                            pressed: { outline: "none" },
                          }}
                          onMouseEnter={(e) => onMouseEnter(e, nom, code)}
                          onMouseLeave={() => setTooltip(null)}
                          onMouseMove={(e) => onMouseEnter(e, nom, code)}
                        />
                      );
                    })
                }
              </Geographies>
            </ComposableMap>
          </div>

          {/* ── Panneau latéral ── */}
          <div className="zone__panneau">
            {/* Légende */}
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

            {/* Recherche */}
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
                        <p>
                          {DEPTS[resultat.code].nom} ({resultat.code})
                        </p>
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
