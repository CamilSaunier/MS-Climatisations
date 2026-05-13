import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./PageLegal.css";

function PageLegal({ label, titre, children }) {
  return (
    <>
      <Navbar />
      <main className="pl">
        <div className="pl__hero">
          <div className="container">
            <span className="section-label">{label}</span>
            <h1 className="pl__titre">{titre}</h1>
          </div>
        </div>
        <section className="section section--white">
          <div className="container pl__contenu">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PageLegal;
