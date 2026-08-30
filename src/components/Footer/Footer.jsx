import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { WHATSAPP_DISPLAY, whatsappUrl } from "../../constants/contact";
import Logo from "../../assets/Logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <img src={Logo} alt="Colégio UniMaster" className="footer-logo" />

          <p>
            Educação moderna, inovadora e preparada para transformar o futuro
            dos alunos.
          </p>

          <div className="footer-contact">
            <div>
              <FaPhoneAlt />
              <span>{WHATSAPP_DISPLAY}</span>
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

        <div className="footer-map">
          <iframe
            title="Localização do Colégio UniMaster em Caruaru"
            src="https://www.google.com/maps?q=Caruaru&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="footer-social">
          <a href="#instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#facebook" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a href="#youtube" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 UniMaster - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
