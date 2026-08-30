import { FaWhatsapp } from "react-icons/fa";

import { whatsappUrl } from "../../constants/contact";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-content">
        <div>
          <h2>Pronto para transformar o futuro?</h2>
          <p>Fale conosco agora mesmo e garanta a vaga do seu filho.</p>
        </div>

        <button
          type="button"
          className="whatsapp-btn"
          onClick={() => window.open(whatsappUrl(), "_blank")}
        >
          <FaWhatsapp size={22} />
          FALAR NO WHATSAPP
        </button>
      </div>
    </section>
  );
}
