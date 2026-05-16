import "./AboutSection.css";

import {
  FaUserGraduate,
  FaSchool,
  FaUsers,
  FaHeart
} from "react-icons/fa";

import Escola from "../../assets/images/escola.png";

export default function AboutSection() {

  return (

    <section className="about">

      <div className="about-container">

        {/* ESQUERDA */}

        <div className="about-left">

          <span>
            SOBRE O COLÉGIO UNIMASTER
          </span>

          <h2>
            Educação que transforma,
            futuro que se constrói.
          </h2>

          <p>
            Tudo começou em 1998, com um sonho:
            criar em Caruaru uma escola diferente,
            onde cada criança pudesse aprender
            com alegria, confiança e acolhimento.
            Assim nasceu o Colégio UniMaster,
            que desde o primeiro dia uniu tradição,
            inovação e amor pela educação.
          </p>

          <p>
            Com muito trabalho e dedicação das sócias
            Rísia e Berenice, o colégio cresceu,
            formou gerações e, em 2015, ganhou
            uma nova casa, abrindo sua segunda unidade
            para receber ainda mais famílias que acreditam
            no nosso jeito de educar.
          </p>

          <p>
            Hoje, o UniMaster é sinônimo de qualidade
            de ensino, cultura, esportes e valores humanos.
            Somos mais que um colégio:
            somos uma família que inspira,
            transforma e realiza.
          </p>

          {/* MISSÃO */}

          <div className="about-topic">

            <div className="topic-icon">
              <FaUserGraduate />
            </div>

            <div>
              <h4>Missão</h4>

              <p>
                Formar cidadãos éticos, críticos e preparados
                para transformar o mundo através da educação.
              </p>
            </div>

          </div>

          {/* VISÃO */}

          <div className="about-topic">

            <div className="topic-icon">
              <FaSchool />
            </div>

            <div>
              <h4>Visão</h4>

              <p>
                Ser referência em educação de qualidade,
                inovação e desenvolvimento humano em Caruaru.
              </p>
            </div>

          </div>

          {/* VALORES */}

          <div className="about-topic">

            <div className="topic-icon">
              <FaHeart />
            </div>

            <div>
              <h4>Valores</h4>

              <p>
                Respeito, responsabilidade, excelência,
                acolhimento e compromisso com o futuro.
              </p>
            </div>

          </div>

        </div>

        {/* DIREITA */}

        <div className="about-right">

          <img
            src={Escola}
            alt="UniMaster"
            className="school-image"
          />

        </div>

      </div>

      {/* ESTATÍSTICAS */}

      <div className="about-stats">

        <div className="stat-card">

          <FaUserGraduate />

          <div>
            <h3>+500</h3>
            <p>Alunos formados</p>
          </div>

        </div>

        <div className="stat-card">

          <FaSchool />

          <div>
            <h3>+20</h3>
            <p>Anos de história</p>
          </div>

        </div>

        <div className="stat-card">

          <FaUsers />

          <div>
            <h3>+30</h3>
            <p>Professores qualificados</p>
          </div>

        </div>

        <div className="stat-card">

          <FaHeart />

          <div>
            <h3>100%</h3>
            <p>Compromisso com o futuro</p>
          </div>

        </div>

      </div>

    </section>

  );
}