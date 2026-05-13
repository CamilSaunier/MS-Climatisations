import PageLegal from "../../components/PageLegal/PageLegal";

const TEL = import.meta.env.VITE_TEL;
const MAIL = import.meta.env.VITE_MAIL;
const SIRET = import.meta.env.VITE_SIRET;
const NAF = import.meta.env.VITE_CODE_NAF;

function MentionsLegales() {
  return (
    <PageLegal label="Informations légales" titre="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        Le présent site est édité par un artisan frigoriste exerçant en nom propre.
      </p>
      <ul>
        <li>
          <strong>Raison sociale :</strong> MS-Climatisation
        </li>
        <li>
          <strong>SIRET :</strong> {SIRET || "En cours d'enregistrement"}
        </li>
        <li>
          <strong>Code NAF / APE :</strong> {NAF || "—"}
        </li>
        <li>
          <strong>Zone d'activité :</strong> Vosges (88) &amp; Meurthe-et-Moselle (54)
        </li>
        <li>
          <strong>Téléphone :</strong>{" "}
          <a href={`tel:${TEL}`}>{TEL}</a>
        </li>
        <li>
          <strong>E-mail :</strong>{" "}
          <a href={`mailto:${MAIL}`}>{MAIL}</a>
        </li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>
        Le directeur de la publication est le gérant de MS-Climatisation, joignable à l'adresse e-mail
        indiquée ci-dessus.
      </p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par un prestataire tiers. Les coordonnées de l'hébergeur sont disponibles
        sur simple demande adressée à <a href={`mailto:${MAIL}`}>{MAIL}</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes…) est
        la propriété exclusive de MS-Climatisation ou de ses partenaires, et est protégé par les lois
        françaises et internationales relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification ou exploitation, totale ou partielle, des
        contenus de ce site, par quelque procédé que ce soit, sans autorisation préalable écrite, est
        strictement interdite et constituerait une contrefaçon.
      </p>

      <h2>Responsabilité</h2>
      <p>
        MS-Climatisation s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées
        sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité
        des informations mises à disposition, et déclinons toute responsabilité pour toute imprécision,
        inexactitude ou omission.
      </p>

      <h2>Liens hypertextes</h2>
      <p>
        Ce site peut contenir des liens vers des sites tiers. MS-Climatisation n'exerce aucun contrôle
        sur ces sites et décline toute responsabilité quant à leur contenu.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront
        seuls compétents.
      </p>

      <div className="pl__encadre">
        <p>
          <strong>Date de dernière mise à jour :</strong> mai 2025 — Pour toute question relative aux
          mentions légales, contactez-nous à <a href={`mailto:${MAIL}`}>{MAIL}</a>.
        </p>
      </div>
    </PageLegal>
  );
}

export default MentionsLegales;
