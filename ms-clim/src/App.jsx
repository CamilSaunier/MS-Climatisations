import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import ZonePage from "./pages/Zone/ZonePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactPage from "./pages/Contact/ContactPage";
import MentionsLegales from "./pages/MentionsLegales/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite/PolitiqueConfidentialite";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/zone" element={<ZonePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
