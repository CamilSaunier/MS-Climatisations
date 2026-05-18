import { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import VerifiedIcon from "@mui/icons-material/Verified";
import SecurityIcon from "@mui/icons-material/Security";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SpeedIcon from "@mui/icons-material/Speed";
import StarIcon from "@mui/icons-material/Star";
import PhoneIcon from "@mui/icons-material/Phone";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import "./AProposPage.css";

const TEL = import.meta.env.VITE_TEL;
const SIRET = import.meta.env.VITE_SIRET;

const PHOTOS = [
  "IMG_4164.jpeg",
  "IMG_4166.jpeg",
  "IMG_4599.jpeg",
  "IMG_5025.jpeg",
  "IMG_5042.jpeg",
  "IMG_5046.jpeg",
  "IMG_5368.jpeg",
  "IMG_5369.jpeg",
  "IMG_5370.jpeg",
  "IMG_5372.jpeg",
  "IMG_20241006_171051.jpg",
];

const GARANTIES = [
  {
    icone: <VerifiedIcon />,
    titre: "Certifié catégorie 1",
    desc: "Attestation d'Aptitude N° AF 240419-05 pour la manipulation des fluides frigorigènes — obligatoire, valide et à jour.",
    accent: "blue",
  },
  {
    icone: <SecurityIcon />,
    titre: "Assuré & responsable",
    desc: "Responsabilité civile décennale souscrite. Vos installations sont couvertes en cas de sinistre.",
    accent: "orange",
  },
  {
    icone: <LocationOnIcon />,
    titre: "Artisan local, sans sous-traitance",
    desc: "Basé à Charmes (88130), j'interviens en Vosges et en Meurthe-et-Moselle. C'est toujours moi qui me déplace.",
    accent: "blue",
  },
];

const VALEURS = [
  {
    icone: <SpeedIcon />,
    label: "Réactivité",
    desc: "Réponse rapide, intervention planifiée dans les meilleurs délais — surtout pour les urgences.",
  },
  {
    icone: <StarIcon />,
    label: "Qualité",
    desc: "Matériel de marques reconnues, pose soignée, finitions propres. Le travail tient dans le temps.",
  },
  {
    icone: <HandshakeIcon />,
    label: "Transparence",
    desc: "Devis détaillé avant toute intervention. Pas de mauvaise surprise sur la facture finale.",
  },
];

const POINTS_FORTS = [
  "Intervention de l'artisan lui-même, du devis à la mise en service",
  "Matériel de marques reconnues : LG, Daikin, Mitsubishi, Samsung…",
  "Entretien préventif et contrats de maintenance disponibles",
  "Dépannage d'urgence priorisé",
  "Conseil honnête sur le matériel adapté à votre situation",
];

function AProposPage() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const prev = useCallback(() => setIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % PHOTOS.length), []);
  const lbPrev = useCallback(() => setLightbox((i) => (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const lbNext = useCallback(() => setLightbox((i) => (i + 1) % PHOTOS.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "ArrowRight") lbNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, lbPrev, lbNext]);

  return (
    <>
      <SEO
        title="À propos — Frigoriste certifié Charmes, Vosges 88"
        description="Artisan frigoriste indépendant basé à Charmes (Vosges 88). Certifié catégorie 1, assuré en décennale. Installation et dépannage climatisation pour particuliers et professionnels."
        canonical="/a-propos"
      />
      <Navbar />
      <main className="ap">
        {/* ── Bandeau titre ── */}
        <div className="ap__hero">
          <div className="container">
            <span className="section-label">Qui suis-je ?</span>
            <h1 className="ap__titre">À propos</h1>
            <p className="ap__sous-titre">
              Artisan frigoriste indépendant dans les Vosges — certifié, assuré, local.
            </p>
          </div>
        </div>

        {/* ── Intro ── */}
        <section className="section section--white">
          <div className="container ap__intro">
            <div className="ap__intro-visuel">
              <div className="ap__avatar">
                <EngineeringIcon />
              </div>
              <div className="ap__siret">
                <span>SIRET {SIRET}</span>
                <span className="ap__siret-sep" />
                <span>NAF 43.22B</span>
              </div>
            </div>

            <div className="ap__intro-texte">
              <span className="section-label">Mon parcours</span>
              <h2 className="section-title">Un métier de terrain, une passion de précision</h2>
              <p>
                Artisan frigoriste indépendant basé à <strong>Charmes (Vosges)</strong>, j'interviens chez
                les particuliers et les professionnels pour l'<strong>installation</strong>, le{" "}
                <strong>dépannage</strong> et l'<strong>entretien</strong> de climatisations et de pompes à
                chaleur.
              </p>
              <p>
                Ce métier, c'est le goût du terrain et des défis techniques. Chaque installation est
                différente, chaque panne est une énigme à résoudre. J'aime le travail bien fait — celui
                qui tient dans le temps et que le client ne regrette pas.
              </p>
              <p>
                Fini les grandes entreprises qui sous-traitent : avec moi, c'est{" "}
                <strong>toujours la même personne</strong> qui intervient, du premier contact jusqu'à la
                mise en service.
              </p>

              <ul className="ap__points">
                {POINTS_FORTS.map((p) => (
                  <li key={p}>
                    <CheckCircleIcon fontSize="small" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Garanties ── */}
        <section className="section section--alt">
          <div className="container">
            <div className="ap__section-header">
              <span className="section-label">Mes engagements</span>
              <h2 className="section-title">Ce qui vous protège</h2>
              <p className="section-subtitle">
                Choisir un artisan certifié et assuré, c'est se protéger des mauvaises surprises.
              </p>
            </div>
            <div className="ap__garanties">
              {GARANTIES.map((g) => (
                <div key={g.titre} className={`ap__garantie ap__garantie--${g.accent}`}>
                  <div className="ap__garantie-icone">{g.icone}</div>
                  <h3 className="ap__garantie-titre">{g.titre}</h3>
                  <p className="ap__garantie-desc">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Valeurs ── */}
        <section className="section section--white">
          <div className="container">
            <div className="ap__section-header">
              <span className="section-label">Ma façon de travailler</span>
              <h2 className="section-title">Mes valeurs</h2>
            </div>
            <div className="ap__valeurs">
              {VALEURS.map((v) => (
                <div key={v.label} className="ap__valeur">
                  <div className="ap__valeur-icone">{v.icone}</div>
                  <strong className="ap__valeur-label">{v.label}</strong>
                  <p className="ap__valeur-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Galerie photos ── */}
        <section className="section section--alt">
          <div className="container">
            <div className="ap__section-header">
              <span className="section-label">Sur le terrain</span>
              <h2 className="section-title">Quelques réalisations</h2>
              <p className="section-subtitle">
                Installations, dépannages et chantiers réalisés dans les Vosges et en Meurthe-et-Moselle.
              </p>
            </div>
            <div
              className="ap__carousel"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                className="ap__carousel-track"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {PHOTOS.map((img, i) => (
                  <div key={img} className="ap__carousel-slide">
                    <img className="ap__carousel-bg" src={`/${img}`} alt="" aria-hidden="true" />
                    <img
                      className="ap__carousel-img"
                      src={`/${img}`}
                      alt="Réalisation MS Clim"
                      loading="lazy"
                      onClick={() => setLightbox(i)}
                    />
                  </div>
                ))}
              </div>

              <button className="ap__carousel-btn ap__carousel-btn--prev" onClick={prev} aria-label="Photo précédente">
                <ArrowBackIosNewIcon fontSize="small" />
              </button>
              <button className="ap__carousel-btn ap__carousel-btn--next" onClick={next} aria-label="Photo suivante">
                <ArrowForwardIosIcon fontSize="small" />
              </button>

              <div className="ap__carousel-dots">
                {PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    className={`ap__carousel-dot${i === index ? " ap__carousel-dot--active" : ""}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section section--dark">
          <div className="container ap__cta">
            <div className="ap__cta-texte">
              <span className="section-label">Prêt à intervenir</span>
              <h2 className="section-title">Un projet ou une panne ?</h2>
              <p className="section-subtitle">Devis gratuit, réponse rapide. Contactez-moi directement.</p>
            </div>
            <div className="ap__cta-btns">
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
      {lightbox !== null && (
        <div className="ap__lightbox" onClick={() => setLightbox(null)}>
          <button className="ap__lightbox-close" onClick={() => setLightbox(null)} aria-label="Fermer">
            <CloseIcon />
          </button>
          <button className="ap__lightbox-btn ap__lightbox-btn--prev" onClick={(e) => { e.stopPropagation(); lbPrev(); }} aria-label="Photo précédente">
            <ArrowBackIosNewIcon />
          </button>
          <img
            src={`/${PHOTOS[lightbox]}`}
            alt="Réalisation MS Clim"
            className="ap__lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="ap__lightbox-btn ap__lightbox-btn--next" onClick={(e) => { e.stopPropagation(); lbNext(); }} aria-label="Photo suivante">
            <ArrowForwardIosIcon />
          </button>
          <span className="ap__lightbox-counter">{lightbox + 1} / {PHOTOS.length}</span>
        </div>
      )}
      <Footer />
    </>
  );
}

export default AProposPage;
