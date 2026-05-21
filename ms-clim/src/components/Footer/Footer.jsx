import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./Footer.css";

const LIENS_NAV = [
  { label: "Nos services", href: "/services" },
  { label: "Zone d'intervention", href: "/zone" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = ["Installation climatisation", "Entretien & maintenance", "Dépannage d'urgence", "Froid commercial", "Pompe à chaleur"];

const TEL = import.meta.env.VITE_TEL;
const MAIL = import.meta.env.VITE_MAIL;
const SIRET = import.meta.env.VITE_SIRET;
const NAF = import.meta.env.VITE_CODE_NAF;
const DECENALE = import.meta.env.VITE_DECENALE;

function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grille">
        {/* ── Colonne 1 : Marque ── */}
        <div className="footer__col footer__col--marque">
          <Link to="/" className="footer__logo">
            <img src="/ms-logo.png" alt="MS Clim" />
            <span className="footer__brand">MS-CLIMATISATIONS</span>
          </Link>
          <p className="footer__desc">
            Artisan frigoriste certifié intervenant dans les Vosges (88) et en Meurthe-et-Moselle (54). Particuliers & professionnels.
          </p>
        </div>

        {/* ── Colonne 2 : Navigation ── */}
        <div className="footer__col">
          <h3 className="footer__titre">Navigation</h3>
          <ul className="footer__liste">
            {LIENS_NAV.map((lien) => (
              <li key={lien.href}>
                <a href={lien.href} className="footer__lien">
                  {lien.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Colonne 3 : Services ── */}
        <div className="footer__col">
          <h3 className="footer__titre">Nos services</h3>
          <ul className="footer__liste">
            {SERVICES.map((s) => (
              <li key={s}>
                <span className="footer__lien footer__lien--static">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Colonne 4 : Contact ── */}
        <div className="footer__col">
          <h3 className="footer__titre">Contact</h3>
          <ul className="footer__contact-liste">
            <li>
              <PhoneIcon fontSize="small" />
              <a href={`tel:${TEL}`} className="footer__lien">
                {TEL}
              </a>
            </li>
            <li>
              <EmailIcon fontSize="small" />
              <a href={`mailto:${MAIL}`} className="footer__lien">
                {MAIL}
              </a>
            </li>
            <li>
              <LocationOnIcon fontSize="small" />
              <span>Vosges (88) & Meurthe-et-Moselle (54)</span>
            </li>
            <li>
              <AccessTimeIcon fontSize="small" />
              <span>Lun – Sam : 8h – 19h</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Barre du bas ── */}
      <div className="footer__bas">
        <div className="container footer__bas-inner">
          <span>© {annee} MS-Climatisations — Tous droits réservés</span>

          {/* Mentions légales obligatoires */}
          <div className="footer__legal">
            <span>SIRET {SIRET}</span>
            <span className="footer__legal-sep" />
            <span>NAF {NAF}</span>
            <span className="footer__legal-sep" />
            <span>{DECENALE}</span>
          </div>

          <span className="footer__mentions">
            <Link to="/mentions-legales" className="footer__lien">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="footer__lien">
              Politique de confidentialité
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
