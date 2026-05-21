import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import SEO from "./components/SEO/SEO";
import NotFound from "./pages/NotFound/NotFound";
import ZonePage from "./pages/Zone/ZonePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactPage from "./pages/Contact/ContactPage";
import MentionsLegales from "./pages/MentionsLegales/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite/PolitiqueConfidentialite";
import AProposPage from "./pages/APropos/AProposPage";
import FloatingCall from "./components/FloatingCall/FloatingCall";

const BASE_URL = import.meta.env.VITE_BASE_URL || "https://ms-climatisations.fr";

const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "MS-Climatisations",
  description:
    "Artisan frigoriste certifié à Charmes (88130). Installation, dépannage et entretien de climatisation dans les Vosges (88) et la Meurthe-et-Moselle (54).",
  url: BASE_URL,
  telephone: "+33744892683",
  email: "msclimatisations@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charmes",
    postalCode: "88130",
    addressRegion: "Vosges",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.37,
    longitude: 6.29,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Vosges (88)" },
    { "@type": "AdministrativeArea", name: "Meurthe-et-Moselle (54)" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de climatisation",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation climatisation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage climatisation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien et maintenance climatisation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pompe à chaleur air/air et air/eau" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Froid commercial" } },
    ],
  },
  priceRange: "€€",
  image: `${BASE_URL}/ms-logo.png`,
};

function HomePage() {
  return (
    <>
      <SEO
        title="Climatisation Charmes & Épinal — Frigoriste Vosges 88"
        description="MS-Climatisations, artisan frigoriste certifié à Charmes (88130). Installation et dépannage climatisation dans les Vosges (88) et Meurthe-et-Moselle (54). LG, Daikin, Mitsubishi, Samsung. Devis gratuit."
        canonical="/"
        schema={LOCAL_BUSINESS}
      />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/zone" element={<ZonePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <FloatingCall />
    </BrowserRouter>
  );
}

export default App;
