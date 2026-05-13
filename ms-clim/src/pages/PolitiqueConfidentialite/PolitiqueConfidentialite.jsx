import PageLegal from "../../components/PageLegal/PageLegal";

const MAIL = import.meta.env.VITE_MAIL;

function PolitiqueConfidentialite() {
  return (
    <PageLegal label="RGPD & Vie privée" titre="Politique de confidentialité">
      <h2>Responsable du traitement</h2>
      <p>
        MS-Climatisation est responsable du traitement des données personnelles collectées via ce site.
        Pour toute question relative à vos données, contactez-nous :{" "}
        <a href={`mailto:${MAIL}`}>{MAIL}</a>.
      </p>

      <h2>Données collectées</h2>
      <p>
        Nous collectons uniquement les données que vous nous transmettez volontairement, notamment via
        le formulaire de contact :
      </p>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse e-mail</li>
        <li>Numéro de téléphone (optionnel)</li>
        <li>Adresse postale (si nécessaire pour le devis)</li>
        <li>Message ou description de votre besoin</li>
      </ul>
      <p>
        La fonctionnalité de vérification d'adresse utilise l'API gouvernementale{" "}
        <strong>Base Adresse Nationale (BAN)</strong> fournie par data.gouv.fr. Aucune donnée saisie
        dans ce champ n'est conservée par MS-Climatisation.
      </p>

      <h2>Finalités du traitement</h2>
      <p>Les données collectées sont utilisées pour :</p>
      <ul>
        <li>Répondre à vos demandes de devis ou d'information</li>
        <li>Gérer la relation commerciale et les interventions</li>
        <li>Respecter nos obligations légales</li>
      </ul>

      <h2>Base légale</h2>
      <p>
        Le traitement repose sur votre <strong>consentement explicite</strong> lors de l'envoi du
        formulaire, et sur l'<strong>exécution d'un contrat</strong> dans le cadre des interventions.
      </p>

      <h2>Durée de conservation</h2>
      <ul>
        <li>
          <strong>Données de contact / devis :</strong> 3 ans à compter du dernier contact commercial.
        </li>
        <li>
          <strong>Données de facturation :</strong> 10 ans conformément aux obligations comptables.
        </li>
      </ul>

      <h2>Destinataires des données</h2>
      <p>
        Vos données ne sont ni vendues, ni cédées à des tiers. Elles peuvent être transmises à des
        sous-traitants techniques (hébergeur, messagerie) dans le strict cadre nécessaire à la
        fourniture du service, et uniquement à des prestataires offrant des garanties suffisantes au
        regard du RGPD.
      </p>

      <h2>Vos droits</h2>
      <p>Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés, vous
        disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d'accès</strong> — consulter les données vous concernant</li>
        <li><strong>Droit de rectification</strong> — corriger des données inexactes</li>
        <li><strong>Droit à l'effacement</strong> — demander la suppression de vos données</li>
        <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
        <li><strong>Droit d'opposition</strong> — vous opposer à un traitement</li>
        <li><strong>Droit à la limitation</strong> — restreindre un traitement en cours</li>
      </ul>
      <p>
        Pour exercer ces droits, adressez votre demande par e-mail à{" "}
        <a href={`mailto:${MAIL}`}>{MAIL}</a>. Nous nous engageons à répondre dans un délai d'un mois.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site n'utilise pas de cookies de traçage ou publicitaires. Des cookies techniques
        strictement nécessaires au fonctionnement du site peuvent être déposés ; ils ne collectent
        aucune donnée personnelle.
      </p>

      <h2>Réclamation</h2>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
        auprès de la <strong>CNIL</strong> :{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          www.cnil.fr
        </a>
        .
      </p>

      <div className="pl__encadre">
        <p>
          <strong>Date de dernière mise à jour :</strong> mai 2025 — Cette politique peut être modifiée
          à tout moment. La version en vigueur est celle publiée sur cette page.
        </p>
      </div>
    </PageLegal>
  );
}

export default PolitiqueConfidentialite;
