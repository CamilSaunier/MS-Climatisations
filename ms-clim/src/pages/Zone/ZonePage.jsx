import Navbar from "../../components/Navbar/Navbar";
import Zone from "../../components/Zone/Zone";
import Footer from "../../components/Footer/Footer";
import "./ZonePage.css";

function ZonePage() {
  return (
    <>
      <Navbar />
      <main className="zone-page">
        <Zone />
      </main>
      <Footer />
    </>
  );
}

export default ZonePage;
