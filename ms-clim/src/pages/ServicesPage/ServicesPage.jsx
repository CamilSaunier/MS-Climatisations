import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BuildIcon from "@mui/icons-material/Build";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CheckIcon from "@mui/icons-material/Check";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import "./ServicesPage.css";
import SEO from "../../components/SEO/SEO";

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
  {
    nom: "LG",
    logo: "/LG_LOGO.png",
    origine: "Corée du Sud",
    desc: "Pionnier de la technologie Inverter, LG propose des climatiseurs résidentiels et commerciaux fiables et économes en énergie.",
    gammes: ["Dual Inverter", "ARTCOOL", "Multi V (VRF)", "Cassette"],
    atout: "Classe énergétique A+++, technologie Dual Cool",
  },
  {
    nom: "Daikin",
    logo: "/DAIKIN_LOGO.png",
    origine: "Japon",
    desc: "Leader mondial du génie climatique, Daikin est reconnu pour la longévité de ses équipements et la précision de sa régulation.",
    gammes: ["Emura", "Stylish", "Perfera", "VRV IV (tertiaire)"],
    atout: "Fluide R-32, système VRV pour les grandes surfaces",
  },
  {
    nom: "Mitsubishi Electric",
    logo: "/MITSUBISHI_ELECTRIC-LOGO.png",
    origine: "Japon",
    desc: "Référence en matière de confort et de silence, Mitsubishi Electric équipe aussi bien les logements que les bâtiments tertiaires.",
    gammes: ["MSZ Kirigamine", "MSZ-HR", "City Multi (VRF)", "Mr. Slim"],
    atout: "Ultra-silencieux, filtration Plasma Quad Connect",
  },
  {
    nom: "Samsung",
    logo: "/SAMSUNG_LOGO.png",
    origine: "Corée du Sud",
    desc: "Samsung allie design soigné et technologie Wind-Free pour un confort sans courant d'air direct.",
    gammes: ["Wind-Free Comfort", "Wind-Free Elite", "DVM S2 (VRF)", "Cassette"],
    atout: "Technologie Wind-Free, connectivité SmartThings",
  },
  {
    nom: "Hisense",
    logo: "/HISENSE_LOGO.png",
    origine: "Chine",
    desc: "Hisense offre un excellent rapport qualité/prix avec des équipements modernes et performants, idéaux pour les budgets maîtrisés.",
    gammes: ["Hi-Comfort", "New Comfort", "Energy Pro+"],
    atout: "Bon rapport qualité/prix, fluide R-32 écologique",
  },
  {
    nom: "Atlantic / Fujitsu",
    logo: "/ATLANTIC_FUJITSU_LOGO.png",
    origine: "France / Japon",
    desc: "Alliance entre le savoir-faire français d'Atlantic et la technologie japonaise de Fujitsu General pour des solutions performantes.",
    gammes: ["Fujitsu Airstage (VRF)", "Atlantic Fujitsu résidentiel", "Gainable"],
    atout: "Couverture complète du résidentiel au tertiaire",
  },
  {
    nom: "Altech",
    logo: "/ALTECH_LOGO.png",
    origine: "France",
    desc: "Spécialiste français des solutions de génie climatique, Altech propose des équipements adaptés aux exigences du marché européen.",
    gammes: ["Climatisation gainable", "Systèmes VRF", "Traitement d'air"],
    atout: "Support technique francophone, pièces disponibles en France",
  },
  {
    nom: "Toshiba",
    logo: "/TOSHIBA_LOGO.png",
    origine: "Japon",
    desc: "Toshiba Air Conditioning est reconnu pour ses systèmes VRF haut de gamme et ses unités résidentielles silencieuses et performantes.",
    gammes: ["Haori", "Shorai Edge", "Super Digital Inverter (SDI)", "SMMS-i (VRF)"],
    atout: "Technologie SDI ultra-silencieuse, VRF modulaire",
  },
  {
    nom: "De Dietrich",
    logo: "/DE_DIETRICH_LOGO.png",
    origine: "France",
    desc: "Marque française du groupe Atlantic, De Dietrich propose des solutions de chauffage et de climatisation alliant fiabilité et efficacité énergétique.",
    gammes: ["Pompes à chaleur air/air", "Pompes à chaleur air/eau", "Gainable", "Cassette"],
    atout: "Marque française, excellente couverture SAV nationale",
  },
];

function MarqueCard({ m }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className={`sp__marque ${ouvert ? "sp__marque--ouvert" : ""}`}>
      <button className="sp__marque-header" onClick={() => setOuvert(!ouvert)} aria-expanded={ouvert}>
        <img src={m.logo} alt={m.nom} className="sp__marque-logo" />
        <span className="sp__marque-nom">{m.nom}</span>
        <ExpandMoreIcon className="sp__marque-chevron" fontSize="small" />
      </button>

      <div className="sp__marque-body">
        <div className="sp__marque-contenu">
          <span className="sp__marque-origine">{m.origine}</span>
          <p className="sp__marque-desc">{m.desc}</p>
          <div className="sp__marque-gammes">
            <strong>Gammes installées :</strong>
            <ul>
              {m.gammes.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div className="sp__marque-atout">
            <span>✦</span> {m.atout}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <>
      <SEO
        title="Services — Installation & Dépannage Climatisation Vosges 88"
        description="Installation de climatisation (split, VRF, pompe à chaleur) et dépannage urgent pour particuliers et professionnels dans les Vosges (88) et Meurthe-et-Moselle (54)."
        canonical="/services"
      />
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
                <MarqueCard key={m.nom} m={m} />
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
              <a href="/contact" className="btn btn-primary">
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
