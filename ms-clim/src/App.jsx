import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Zone from "./components/Zone/Zone";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import MentionsLegales from "./pages/MentionsLegales/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite/PolitiqueConfidentialite";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Zone />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
