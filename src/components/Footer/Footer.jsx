import "./Footer.css";

import Logo from "../../assets/Logo.png";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ESQUERDA */}

        <div className="footer-info">

          <img
            src={Logo}
            alt="Logo UniMaster"
            className="footer-logo"
          />

          <p>
            Educação moderna, inovadora e preparada
            para transformar o futuro dos alunos.
          </p>

          <div className="footer-contact">

            <div>
              <FaPhoneAlt />
              <span>(81) 98711-7084</span>
            </div>

            <div>
              <FaEnvelope />
              <span>contato@unimaster.com.br</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Caruaru - PE</span>
            </div>

          </div>

        </div>

        {/* MAPA */}

        <div className="footer-map">

        <iframe
  src="https://www.google.com/maps?q=Rua+Do+Convento,+770+-+Divinópolis,+Caruaru+-+PE,+55010-280&output=embed"
  allowFullScreen=""
  loading="lazy"
></iframe>
        </div>

        {/* REDES */}

        <div className="footer-social">

          <a href="/">
            <FaInstagram />
          </a>

          <a href="/">
            <FaFacebookF />
          </a>

          <a href="/">
            <FaWhatsapp />
          </a>

          <a href="/">
            <FaYoutube />
          </a>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 UniMaster - Todos os direitos reservados
        </p>

      </div>

    </footer>
  );
}