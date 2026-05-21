import { Helmet } from "react-helmet-async";

const BASE_URL = import.meta.env.VITE_BASE_URL || "https://ms-climatisations.fr";

function SEO({ title, description, canonical, noindex = false, schema }) {
  const fullTitle = title
    ? `${title} | MS-Climatisations`
    : "MS-Climatisations — Frigoriste Vosges 88 & Meurthe-et-Moselle 54";

  const url = `${BASE_URL}${canonical || ""}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MS-Climatisations" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${BASE_URL}/ms-logo.png`} />
      <meta property="og:locale" content="fr_FR" />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}

export default SEO;
