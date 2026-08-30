import { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "../../constants/contact";
import Mulher from "../../assets/images/atendente.png";
import "./ContactSection.css";

export default function ContactSection() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarWhatsApp = (event) => {
    event.preventDefault();

    const texto = `Olá, gostaria de entrar em contato.

*Nome:* ${nome}
*Telefone:* ${telefone}
*E-mail:* ${email}
*Assunto:* ${assunto}

*Mensagem:*
${mensagem}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span>ENTRE EM CONTATO</span>
          <h2>Estamos prontos para atender você!</h2>
          <p>
            Fale conosco e tire suas dúvidas sobre matrículas, cursos, estrutura
            e muito mais.
          </p>

          <div className="contact-items">
            <div className="contact-item">
              <FaWhatsapp />
              <div>
                <h4>WhatsApp</h4>
                <p>{WHATSAPP_DISPLAY}</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <div>
                <h4>Telefone</h4>
                <p>{WHATSAPP_DISPLAY}</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h4>E-mail</h4>
                <p>contato@unimaster.com.br</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Endereço</h4>
                <p>Caruaru - PE</p>
              </div>
            </div>

            <div className="contact-item">
              <FaClock />
              <div>
                <h4>Horário de Atendimento</h4>
                <p>Segunda à Sexta: 7h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-area">
          <div className="contact-form">
            <h3>Envie uma mensagem</h3>

            <form onSubmit={enviarWhatsApp}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder={WHATSAPP_DISPLAY}
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                  required
                />
              </div>

              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <select
                value={assunto}
                onChange={(event) => setAssunto(event.target.value)}
                required
              >
                <option value="">Selecione um assunto</option>
                <option value="Matrículas">Matrículas</option>
                <option value="Cursos">Cursos</option>
                <option value="Financeiro">Financeiro</option>
              </select>

              <textarea
                placeholder="Digite sua mensagem..."
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
                required
              ></textarea>

              <button type="submit">
                ENVIAR MENSAGEM
                <FaPaperPlane />
              </button>
            </form>
          </div>

          <img src={Mulher} alt="" className="contact-woman" />
        </div>
      </div>
    </section>
  );
}
