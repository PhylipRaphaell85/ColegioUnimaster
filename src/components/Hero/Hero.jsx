import { FaWhatsapp } from "react-icons/fa";

import { whatsappUrl } from "../../constants/contact";
import Matricula from "../../assets/images/matriculas.png";
import Crianças from "../../assets/images/alunos.png";
import Fundo from "../../assets/images/fundo.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${Fundo})` }}>
      <div className="decorative-element orbit orbit-1"></div>
      <div className="decorative-element orbit orbit-2"></div>

      <div className="hero-container">
        <div className="hero-left">
          <div className="paper">
            <img src={Matricula} alt="Matrículas Abertas" />
          </div>

          <p>Educação moderna, inovadora e preparada para o futuro.</p>

          <button
            type="button"
            className="whatsapp-btn"
            onClick={() => window.open(whatsappUrl(), "_blank")}
          >
            <FaWhatsapp size={22} />
            FALAR NO WHATSAPP
          </button>
        </div>

        <div className="hero-right">
          <img src={Crianças} alt="Alunos do Colégio UniMaster" />
        </div>
      </div>
    </section>
  );
}
