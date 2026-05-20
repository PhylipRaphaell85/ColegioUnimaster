import "./CoursesSection.css";
import { useState } from "react";
import CTA from "../../components/CTA/CTA";
import {
  FaUserFriends,
  FaBookOpen,
  FaGraduationCap,
  FaCheck
} from "react-icons/fa";

import Infantil from "../../assets/images/infantil.jpg";
import Fundamental from "../../assets/images/fundamental.jpg";
import Medio from "../../assets/images/medio.jpg";
import "./CoursesSection.css";


export default function CoursesSection() {

  const [openModal, setOpenModal] = useState(false);
  const [openFundamental, setOpenFundamental] = useState(false);
  

  return (

    <section className="courses">

      {/* TÍTULO */}

      <div className="courses-title">

        <span>NOSSOS CURSOS</span>

        <h2>
          Uma jornada de aprendizado
          para cada etapa da vida.
        </h2>

      </div>

      {/* GRID */}

      <div className="courses-grid">

        {/* EDUCAÇÃO INFANTIL */}

        <div className="course-card">

          <img
            src={Infantil}
            alt="Educação Infantil"
          />

          <div className="course-content">

            <div className="course-icon">
              <FaUserFriends />
            </div>

            <h3>
              Educação Infantil
            </h3>

            <p>
              Aprender brincando, explorando
              o mundo e desenvolvendo
              as primeiras habilidades.
            </p>

            <ul>

              <li>
                <FaCheck />
                Atividades lúdicas
              </li>

              <li>
                <FaCheck />
                Desenvolvimento socioemocional
              </li>

              <li>
                <FaCheck />
                Alfabetização e letramento
              </li>

            </ul>

            <button
              className="saiba-btn"
              onClick={() => setOpenModal(true)}
            >
              Saiba mais →
            </button>

          </div>

        </div>

        {/* ENSINO FUNDAMENTAL */}

        <div className="course-card">

          <img
            src={Fundamental}
            alt="Ensino Fundamental"
          />

          <div className="course-content">

            <div className="course-icon">
              <FaBookOpen />
            </div>

            <h3>
              Ensino Fundamental
            </h3>

            <p>
              Base sólida de conhecimentos
              para formar alunos curiosos,
              críticos e preparados.
            </p>

            <ul>

              <li>
                <FaCheck />
                Componentes curriculares completos
              </li>

              <li>
                <FaCheck />
                Projetos interdisciplinares
              </li>

              <li>
                <FaCheck />
                Acompanhamento pedagógico
              </li>

            </ul>

         <button
  className="saiba-btn"
  onClick={() => setOpenFundamental(true)}
>
  Saiba mais →
</button>

          </div>

        </div>

        {/* ENSINO MÉDIO */}

        <div className="course-card">

          <img
            src={Medio}
            alt="Ensino Médio"
          />

          <div className="course-content">

            <div className="course-icon">
              <FaGraduationCap />
            </div>

            <h3>
              Ensino Fundamental II

            </h3>

            <p>
              Preparação acadêmica de excelência
              para os desafios da universidade
              e do mercado de trabalho.
            </p>

            <ul>

              <li>
                <FaCheck />
                Formação acadêmica completa
              </li>

              <li>
                <FaCheck />
                Orientação profissional
              </li>

              <li>
                <FaCheck />
                Preparação para o ENEM
              </li>

            </ul>

            <button className="saiba-btn">
              Saiba mais →
            </button>

          </div>

        </div>

      </div>

      {/* CTA */}
 <CTA />
     

      {/* MODAL */}

      {
        openModal && (

          <div
            className="modal-overlay"
            onClick={() => setOpenModal(false)}
          >

            <div
              className="course-modal"
              onClick={(e) => e.stopPropagation()}
            >

              {/* FECHAR */}

              <button
                className="close-modal"
                onClick={() => setOpenModal(false)}
              >
                ×
              </button>

              {/* CONTEÚDO */}

              <div className="modal-content">

                {/* ESQUERDA */}

                <div className="modal-left">

                  <span>
                    EDUCAÇÃO INFANTIL
                  </span>

                  <button>
                    MATERNAL AO INFANTIL 5
                  </button>

                  <p>
                    Na Educação Infantil do Colégio UniMaster,
                    acreditamos que cada momento da infância
                    é único e especial.
                  </p>

                  <p>
                    Nossa missão é acolher, cuidar e ensinar
                    com amor, oferecendo um ambiente seguro,
                    criativo e cheio de descobertas.
                  </p>

                  <p>
                    Aqui, as crianças aprendem brincando,
                    exploram o mundo com curiosidade,
                    desenvolvem autonomia e constroem
                    valores para toda vida.
                  </p>

                </div>

                {/* DIREITA */}

                <div className="modal-right">

                  <img
                    src={Infantil}
                    alt="Educação Infantil"
                  />

                </div>

              </div>

            </div>

          </div>

        )
      }
      {
  openFundamental && (

    <div
      className="modal-overlay"
      onClick={() => setOpenFundamental(false)}
    >

      <div
        className="course-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* FECHAR */}

        <button
          className="close-modal"
          onClick={() => setOpenFundamental(false)}
        >
          ×
        </button>

        {/* CONTEÚDO */}

        <div className="modal-content">

          {/* TEXTO */}

          <div className="modal-left">

            <span>
              ENSINO FUNDAMENTAL
            </span>

            <button>
              ANOS INICIAIS (1º AO 5º ANO)
            </button>

            <p>
              O Ensino Fundamental do Colégio UniMaster
              é a fase em que nossos alunos consolidam
              aprendizagens essenciais, desenvolvem
              novas habilidades e descobrem seus talentos.
            </p>

            <p>
              É nesse período que fortalecemos a formação
              acadêmica, sem abrir mão da formação humana,
              preparando-os para os próximos desafios
              da vida escolar e pessoal.
            </p>

            <p>
              Nosso trabalho vai muito além dos conteúdos:
              buscamos desenvolver autonomia intelectual,
              pensamento crítico, criatividade e respeito
              ao outro, sempre em um ambiente seguro,
              acolhedor e motivador.
            </p>

          </div>

          {/* IMAGEM */}

          <div className="modal-right">

            <img
              src={Fundamental}
              alt="Ensino Fundamental"
            />

          </div>

        </div>

      </div>

    </div>

  )
}
    </section>

  );
}