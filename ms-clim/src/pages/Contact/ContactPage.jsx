import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./ContactPage.css";

const TEL = import.meta.env.VITE_TEL;
const MAIL = import.meta.env.VITE_MAIL;

const INFOS = [
  { icone: <LocationOnIcon />, label: "Zone d'intervention", valeur: "Vosges (88) & Meurthe-et-Moselle (54)" },
  { icone: <AccessTimeIcon />, label: "Disponibilité", valeur: "Lun – Sam : 8h – 19h" },
];

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="cp">
        {/* ── Bandeau ── */}
        <div className="cp__hero">
          <div className="container">
            <span className="section-label">Parlons-en</span>
            <h1 className="cp__titre">Contact</h1>
            <p className="cp__sous-titre">Devis gratuit, réponse rapide. Choisissez le moyen qui vous convient.</p>
          </div>
        </div>

        <section className="section section--white">
          <div className="container cp__corps">
            {/* ── Actions principales ── */}
            <div className="cp__actions">
              <a href={`tel:${TEL}`} className="cp__action cp__action--orange">
                <div className="cp__action-icone">
                  <PhoneIcon />
                </div>
                <div>
                  <strong>Appeler</strong>
                  <span>{TEL}</span>
                </div>
              </a>

              <a href={`mailto:${MAIL}`} className="cp__action cp__action--blue">
                <div className="cp__action-icone">
                  <EmailIcon />
                </div>
                <div>
                  <strong>E-mail</strong>
                  <span>{MAIL}</span>
                </div>
              </a>
            </div>

            {/* ── Infos pratiques ── */}
            <div className="cp__infos">
              {INFOS.map((info) => (
                <div key={info.label} className="cp__info-item">
                  <div className="cp__info-icone">{info.icone}</div>
                  <div>
                    <span className="cp__info-label">{info.label}</span>
                    <span className="cp__info-valeur">{info.valeur}</span>
                  </div>
                </div>
              ))}

              {/* Urgence */}
              <div className="cp__urgence">
                <span className="cp__urgence-dot" />
                <div>
                  <strong>Intervention d'urgence</strong>
                  <p>Panne critique ? Appelez directement, je priorise les urgences.</p>
                  <a href={`tel:${TEL}`} className="btn btn-primary cp__urgence-btn">
                    <PhoneIcon fontSize="small" />
                    {TEL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;
