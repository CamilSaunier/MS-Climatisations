import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./Navbar.css";

const LIENS = [
  { label: "Services", href: "/services" },
  { label: "Zone", href: "/zone" },
  { label: "À propos", href: "/#about" },
  { label: "Contact", href: "/contact" },
  // les marques dans à propos LG DAIKIN MITSUBISHI SAMSUNG ISENSE ATLANTIC/FUJITSU ALTECH
];

// Numéro depuis .env //TODO : vérifier si le numéro est bon
const TEL = import.meta.env.VITE_TEL;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOuvert, setMenuOuvert] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      {/* ── Bande orange (disparaît au scroll) ── */}
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__tagline">
            <AcUnitIcon fontSize="small" />
            Intervention dans les Vosges (88) et en Meurthe-et-Moselle (54)
          </span>
          <div className="topbar__droite">
            <span className="topbar__sep" />
            <a href={`tel:${TEL}`} className="topbar__tel">
              <PhoneIphoneIcon fontSize="small" />
              {TEL}
            </a>
          </div>
        </div>
      </div>

      {/* ── Barre principale bleu nuit ── */}
      <nav className="navbar">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src="/ms-logo.png" alt="MS Clim" />
            <span className="navbar__brand">MS-CLIMATISATION</span>
          </Link>

          <ul className="navbar__liens">
            {LIENS.map((lien) => (
              <li key={lien.href}>
                <a href={lien.href} className="navbar__lien">
                  {lien.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="/contact" className="btn btn-primary navbar__cta">
            Demander un devis
          </a>

          <button className="navbar__hamburger" onClick={() => setMenuOuvert(!menuOuvert)} aria-label="Ouvrir le menu">
            {menuOuvert ? "✕" : "☰"}
          </button>
        </div>

        {menuOuvert && (
          <div className="navbar__mobile">
            {LIENS.map((lien) => (
              <a key={lien.href} href={lien.href} className="navbar__mobile-lien" onClick={() => setMenuOuvert(false)}>
                {lien.label}
              </a>
            ))}
            <a href="/contact" className="btn btn-primary" onClick={() => setMenuOuvert(false)}>
              Demander un devis
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
