import "./CTA.css";

import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {

  const whatsappLink =
    "https://wa.me/5581987117084?text=Olá,%20gostaria%20de%20informações%20sobre%20as%20matrículas.";

  return (
    <section className="cta">

      <div className="cta-content">

        <div>
          <h2>
            Pronto para transformar o futuro?
          </h2>

          <p>
            Fale conosco agora mesmo e garanta a vaga do seu filho.
          </p>
        </div>

        <button
          className="whatsapp-btn"
          onClick={() => window.open(whatsappLink, "_blank")}
        >
          <FaWhatsapp size={24} />
          FALAR NO WHATSAPP
        </button>

      </div>

    </section>
  );
}