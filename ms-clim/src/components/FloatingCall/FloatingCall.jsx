import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import "./FloatingCall.css";

const TEL = import.meta.env.VITE_TEL;

function FloatingCall() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`floating-call${open ? " floating-call--open" : ""}`}>
      <button
        className="floating-call__tab"
        onClick={() => setOpen((o) => !o)}
        aria-label="Appeler MS-Climatisations"
      >
        <PhoneIcon />
      </button>

      <a href={`tel:${TEL}`} className="floating-call__panel">
        <span className="floating-call__label">Appeler</span>
        <strong className="floating-call__tel">{TEL}</strong>
      </a>
    </div>
  );
}

export default FloatingCall;
