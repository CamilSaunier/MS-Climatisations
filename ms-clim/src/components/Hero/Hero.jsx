import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          {/* Petite étiquette au-dessus du titre */}
          <div className="hero__label">
            <span className="hero__label-dot" />
            Frigoriste certifié — Vosges (88) & Meurthe-et-Moselle (54)
          </div>

          {/* Titre principal */}
          <h1 className="hero__title">
            Artisan en Froid
            <br />& Climatisation
          </h1>

          {/* Description */}
          <p className="hero__desc">
            Installation, entretien et dépannage d'urgence. Intervention rapide pour les particuliers et les professionnels.
          </p>

          {/* Boutons d'action */}
          <div className="hero__ctas">
            <a href="/contact" className="btn btn-primary">
              Demander un devis
            </a>
            <a href="/services" className="btn btn-outline-light">
              Mes services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
