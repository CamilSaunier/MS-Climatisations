import Navbar from "../../components/Navbar/Navbar";
import Zone from "../../components/Zone/Zone";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import "./ZonePage.css";

function ZonePage() {
  return (
    <>
      <SEO
        title="Zone d'intervention — Vosges 88 & Meurthe-et-Moselle 54"
        description="MS-Climatisations intervient à Charmes, Épinal, Remiremont (Vosges 88) et Nancy, Lunéville, Toul (Meurthe-et-Moselle 54). Entrez votre adresse pour vérifier la couverture."
        canonical="/zone"
      />
      <Navbar />
      <main className="zone-page">
        <Zone />
      </main>
      <Footer />
    </>
  );
}

export default ZonePage;
