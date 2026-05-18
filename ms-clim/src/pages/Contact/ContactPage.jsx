import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlined";
import "./ContactPage.css";

const TEL = import.meta.env.VITE_TEL;
const MAIL = import.meta.env.VITE_MAIL?.trim().replace(/^"|"$/g, "");
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const INFOS = [
  { icone: <LocationOnIcon />, label: "Zone d'intervention", valeur: "Vosges (88) & Meurthe-et-Moselle (54)" },
  { icone: <AccessTimeIcon />, label: "Disponibilité", valeur: "Lun – Sam : 8h – 19h" },
];

const TYPES = [
  "Installation climatisation",
  "Installation pompe à chaleur",
  "Dépannage / urgence",
  "Entretien / maintenance",
  "Demande de devis",
  "Autre",
];

const EMPTY = { nom: "", telephone: "", email: "", type: "", message: "" };

function ContactPage() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.nom,
          telephone: form.telephone,
          reply_to: form.email,
          type_demande: form.type,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SEO
        title="Contact — Devis climatisation Vosges 88"
        description="Contactez MS-Climatisation pour un devis gratuit ou une intervention d'urgence. Disponible lun–sam 8h–19h dans les Vosges (88) et Meurthe-et-Moselle (54)."
        canonical="/contact"
      />
      <Navbar />
      <main className="cp">
        {/* ── Bandeau ── */}
        <div className="cp__hero">
          <div className="container">
            <span className="section-label">Parlons-en</span>
            <h1 className="cp__titre">Contact</h1>
            <p className="cp__sous-titre">
              Devis gratuit, réponse rapide. Remplissez le formulaire ou appelez directement.
            </p>
          </div>
        </div>

        <section className="section section--white">
          <div className="container cp__corps">

            {/* ── Formulaire ── */}
            <div className="cp__form-wrap">
              <span className="section-label">Formulaire de contact</span>
              <h2 className="section-title">Envoyez votre demande</h2>
              <p className="cp__form-intro">
                Je vous réponds dans les meilleurs délais, généralement le jour même.
              </p>

              {status === "success" ? (
                <div className="cp__feedback cp__feedback--success">
                  <CheckCircleIcon />
                  <div>
                    <strong>Message envoyé !</strong>
                    <p>Je vous répondrai très rapidement. À bientôt.</p>
                  </div>
                  <button className="cp__feedback-reset" onClick={() => setStatus("idle")}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="cp__form" onSubmit={handleSubmit} noValidate>
                  <div className="cp__form-row">
                    <div className="cp__field">
                      <label htmlFor="nom">Nom & Prénom *</label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        placeholder="Jean Dupont"
                        value={form.nom}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="cp__field">
                      <label htmlFor="telephone">Téléphone *</label>
                      <input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        placeholder="06 xx xx xx xx"
                        value={form.telephone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="cp__form-row">
                    <div className="cp__field">
                      <label htmlFor="email">E-mail</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jean@exemple.fr"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="cp__field">
                      <label htmlFor="type">Type de demande</label>
                      <select id="type" name="type" value={form.type} onChange={handleChange}>
                        <option value="">— Choisir —</option>
                        {TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="cp__field">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Décrivez votre besoin : type de logement, surface, problème rencontré…"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {status === "error" && (
                    <div className="cp__feedback cp__feedback--error">
                      <ErrorOutlineIcon />
                      <span>Une erreur est survenue. Veuillez réessayer ou appeler directement.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary cp__submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      "Envoi en cours…"
                    ) : (
                      <>
                        <SendIcon fontSize="small" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── Sidebar coordonnées ── */}
            <aside className="cp__sidebar">
              <a href={`tel:${TEL}`} className="cp__action cp__action--orange">
                <div className="cp__action-icone"><PhoneIcon /></div>
                <div>
                  <strong>Appeler</strong>
                  <span>{TEL}</span>
                </div>
              </a>

              <a href={`mailto:${MAIL}`} className="cp__action cp__action--blue">
                <div className="cp__action-icone"><EmailIcon /></div>
                <div>
                  <strong>E-mail</strong>
                  <span>{MAIL}</span>
                </div>
              </a>

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
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;
