import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BuildIcon from "@mui/icons-material/Build";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CheckIcon from "@mui/icons-material/Check";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import "./ServicesPage.css";

const TEL = import.meta.env.VITE_TEL;

const SERVICES = [
  {
    id: "depannage",
    accent: "orange",
    icone: <BuildIcon />,
    titre: "Dépannage",
    desc: "Intervention rapide pour diagnostiquer et remettre en marche votre système. Réactivité garantie pour les pannes urgentes.",
    items: [
      "Diagnostic complet du système",
      "Remplacement de composants défaillants",
      "Recharge en fluide frigorigène",
      "Nettoyage des filtres et des échangeurs",
      "Entretien préventif et contrats maintenance",
      "Intervention d'urgence",
    ],
  },
  {
    id: "installation",
    accent: "blue",
    icone: <EngineeringIcon />,
    titre: "Installation",
    desc: "Pose et mise en service de A à Z — du choix du matériel adapté à votre besoin jusqu'au paramétrage final.",
    items: [
      "Climatisation split mono et multi-splits",
      "Systèmes VRV / VRF pour les grandes surfaces",
      "Pompe à chaleur air/air et air/eau",
      "Froid commercial (vitrines, chambres froides)",
      "Raccordements électrique et frigorifique",
      "Mise en service, tests et paramétrage",
      "Conseil sur le choix du matériel",
    ],
  },
];

const MARQUES = [
  { nom: "LG", logo: "/LG_LOGO.png" },
  { nom: "Daikin", logo: "/DAIKIN_LOGO.png" },
  { nom: "Mitsubishi Electric", logo: "/MITSUBISHI_ELECTRIC-LOGO.png" },
  { nom: "Samsung", logo: "/SAMSUNG_LOGO.png" },
  { nom: "Hisense", logo: "/HISENSE_LOGO.png" },
  { nom: "Atlantic / Fujitsu", logo: "/ATLANTIC_FUJITSU_LOGO.png" },
  { nom: "Altech", logo: "/ALTECH_LOGO.png" },
];

function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="sp">
        {/* ── Bandeau titre ── */}
        <div className="sp__hero">
          <div className="container">
            <span className="section-label">Ce que je fais</span>
            <h1 className="sp__titre">Nos services</h1>
            <p className="sp__sous-titre">
              Dépannage et installation pour les particuliers et les professionnels — dans les Vosges (88) et en Meurthe-et-Moselle (54).
            </p>
          </div>
        </div>

        {/* ── Cartes services ── */}
        <section className="section section--white">
          <div className="container">
            <div className="sp__grille">
              {SERVICES.map((s) => (
                <article key={s.id} className={`sp__carte sp__carte--${s.accent}`}>
                  <div className="sp__carte-barre" />

                  <div className="sp__carte-icone">{s.icone}</div>

                  <h2 className="sp__carte-titre">{s.titre}</h2>
                  <p className="sp__carte-desc">{s.desc}</p>

                  <ul className="sp__carte-liste">
                    {s.items.map((item) => (
                      <li key={item}>
                        <CheckIcon fontSize="small" className="sp__check" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="sp__carte-public">
                    <span>
                      <HomeIcon fontSize="small" />
                      Particuliers
                    </span>
                    <span className="sp__public-sep" />
                    <span>
                      <BusinessIcon fontSize="small" />
                      Professionnels
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Marques ── */}
        <section className="section section--alt">
          <div className="container">
            <div className="section-header sp__marques-header">
              <span className="section-label">Matériel installé</span>
              <h2 className="section-title">Marques partenaires</h2>
              <p className="section-subtitle">
                J'installe et entretiens des équipements de marques reconnues pour leur fiabilité et leurs performances.
              </p>
            </div>
            <div className="sp__marques">
              {MARQUES.map((m) => (
                <div key={m.nom} className="sp__marque">
                  <img src={m.logo} alt={m.nom} className="sp__marque-logo" />
                  <span className="sp__marque-nom">{m.nom}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section section--dark">
          <div className="container sp__cta">
            <div className="sp__cta-texte">
              <span className="section-label">Prêt à intervenir</span>
              <h2 className="section-title">Besoin d'une intervention ?</h2>
              <p className="section-subtitle">Devis gratuit, réponse rapide. Contactez-moi par téléphone ou via le formulaire.</p>
            </div>
            <div className="sp__cta-btns">
              <a href="/#contact" className="btn btn-primary">
                Demander un devis
              </a>
              <a href={`tel:${TEL}`} className="btn btn-outline-light">
                <PhoneIcon fontSize="small" />
                {TEL}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ServicesPage;
