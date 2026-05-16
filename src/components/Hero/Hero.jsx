import "./Hero.css";
import { FaWhatsapp } from "react-icons/fa";
import Matricula from "../../assets/images/matriculas.png";
import Crianças from "../../assets/images/alunos.png";
import Fundo from "../../assets/images/fundo.png";

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${Fundo})` }}>
      {/* Elementos decorativos */}
      <div className="decorative-element orbit orbit-1"></div>
      <div className="decorative-element orbit orbit-2"></div>

      <div className="hero-container">
        <div className="hero-left">
          <div className="paper">
            <img src={Matricula} alt="Matrículas Abertas" />
          </div>

          <p>
            Educação moderna, inovadora e preparada para o futuro.
          </p>

    <button
  className="whatsapp-btn"
  onClick={() =>
    window.open(
      "https://wa.me/5581999999999?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20as%20matrículas.",
      "_blank"
    )
  }
>
  <FaWhatsapp size={24} />
  FALAR NO WHATSAPP
</button>
        </div>

        <div className="hero-right">
          <img src={Crianças} alt="Alunos UniMaster" />
        </div>
      </div>
    </section>
  );
}