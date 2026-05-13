import { useNavigate } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import "./NotFound.css";

const TEL = import.meta.env.VITE_TEL;

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="nf">
      {/* Flocons d'ambiance */}
      <div className="nf__flocons" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <AcUnitIcon key={i} className="nf__flocon" />
        ))}
      </div>

      <div className="nf__carte">
        {/* Code erreur */}
        <div className="nf__code">
          <span className="nf__code-chiffre">4</span>
          <span className="nf__code-zero">0</span>
          <span className="nf__code-chiffre">4</span>
        </div>

        {/* Étiquette technique */}
        <div className="nf__badge">
          <span className="nf__badge-dot" />
          Code erreur — Circuit ouvert
        </div>

        <h1 className="nf__titre">Page introuvable</h1>

        <p className="nf__desc">
          Cette page s'est évaporée comme le fluide frigorigène&nbsp;—&nbsp; aucune pression détectée dans ce circuit.
          <br />
          Revenez à l'accueil.
        </p>

        {/* Jauge de pression vide */}
        <div className="nf__jauge" aria-hidden="true">
          <span className="nf__jauge-label">Pression système</span>
          <div className="nf__jauge-bar">
            <div className="nf__jauge-fill" />
          </div>
          <span className="nf__jauge-valeur">0 bar</span>
        </div>

        {/* Actions */}
        <div className="nf__ctas">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            <HomeIcon fontSize="small" />
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
