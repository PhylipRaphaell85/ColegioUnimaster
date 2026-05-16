import "./ContactSection.css";

import { useState } from "react";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaChevronDown
} from "react-icons/fa";

import Mulher from "../../assets/images/atendente.png";

export default function ContactSection() {

  /* STATES */

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const opcoes = [
    { valor: "Matrículas", label: "Matrículas" },
    { valor: "Cursos", label: "Cursos" },
    { valor: "Financeiro", label: "Financeiro" }
  ];

  /* ENVIAR WHATSAPP */

  const enviarWhatsApp = (e) => {

    e.preventDefault();

    const texto = `
Olá, gostaria de entrar em contato.

*Nome:* ${nome}
*Telefone:* ${telefone}
*E-mail:* ${email}
*Assunto:* ${assunto}

*Mensagem:*
${mensagem}
`;

    const numero = "5581987117084";

    const url =
      `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  const handleSelectOption = (valor) => {
    setAssunto(valor);
    setDropdownOpen(false);
  };

  return (

    <section className="contact">

      <div className="contact-container">

        {/* ESQUERDA */}

        <div className="contact-info">

          <span>ENTRE EM CONTATO</span>

          <h2>
            Estamos prontos para atender você!
          </h2>

          <p>
            Fale conosco e tire suas dúvidas sobre
            matrículas, cursos, estrutura e muito mais.
          </p>

          <div className="contact-items">

            <div className="contact-item">
              <FaWhatsapp />

              <div>
                <h4>WhatsApp</h4>
                <p>(81) 98711-7084</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />

              <div>
                <h4>Telefone</h4>
                <p>(81) 99999-9999</p>
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

                <p>
                 Rua Do Convento, 770 <br /> Divinópolis, Caruaru - PE
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaClock />

              <div>
                <h4>Horário de Atendimento</h4>

                <p>
                  Segunda à Sexta: 7h às 18h
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* FORMULÁRIO */}

        <div className="contact-form-area">

          <div className="contact-form">

            <h3>
              Envie uma mensagem
            </h3>

            <form onSubmit={enviarWhatsApp}>

              {/* INPUTS */}

              <div className="input-group">

                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="(81) 99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />

              </div>

              {/* EMAIL */}

              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* ASSUNTO - CUSTOM DROPDOWN */}

              <div className="custom-select-wrapper">
                <button
                  type="button"
                  className="custom-select-button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>{assunto || "Selecione um assunto"}</span>
                  <FaChevronDown className={`chevron ${dropdownOpen ? 'open' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="custom-select-dropdown">
                    {opcoes.map((opcao) => (
                      <button
                        key={opcao.valor}
                        type="button"
                        className={`custom-select-option ${assunto === opcao.valor ? 'selected' : ''}`}
                        onClick={() => handleSelectOption(opcao.valor)}
                      >
                        {opcao.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* MENSAGEM */}

              <textarea
                placeholder="Digite sua mensagem..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              ></textarea>

              {/* BOTÃO */}

              <button type="submit">

                ENVIAR MENSAGEM

                <FaPaperPlane />

              </button>

            </form>

          </div>

          {/* MULHER */}

          <img
            src={Mulher}
            alt="Atendente"
            className="contact-woman"
          />

        </div>

      </div>

    </section>
  );
}