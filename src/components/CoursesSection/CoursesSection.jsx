import { useState } from "react";
import { FaUserFriends, FaBookOpen, FaGraduationCap, FaCheck } from "react-icons/fa";

import CTA from "../CTA/CTA";
import Infantil from "../../assets/images/infantil.jpg";
import Fundamental from "../../assets/images/fundamental.jpg";
import Medio from "../../assets/images/medio.jpg";
import "./CoursesSection.css";

const courseCards = [
  {
    id: "infantil",
    image: Infantil,
    alt: "Educação Infantil",
    icon: <FaUserFriends />,
    title: "Educação Infantil",
    text: "Aprender brincando e desenvolvendo as primeiras habilidades.",
    items: [
      "Atividades lúdicas",
      "Desenvolvimento socioemocional",
      "Alfabetização e letramento",
    ],
    modal: {
      label: "EDUCAÇÃO INFANTIL",
      range: "MATERNAL AO INFANTIL 5",
      paragraphs: [
        "Na Educação Infantil do Colégio UniMaster, acreditamos que cada momento da infância é único e especial.",
        "Nossa missão é acolher, cuidar e ensinar com amor, oferecendo um ambiente seguro, criativo e cheio de descobertas.",
        "Aqui, as crianças aprendem brincando, exploram o mundo com curiosidade, desenvolvem autonomia e constroem valores para toda a vida.",
      ],
    },
  },
  {
    id: "fundamental",
    image: Fundamental,
    alt: "Ensino Fundamental I",
    icon: <FaBookOpen />,
    title: "Ensino Fundamental I",
    text: "Base sólida para formar alunos curiosos e preparados.",
    items: [
      "Componentes curriculares completos",
      "Projetos interdisciplinares",
      "Acompanhamento pedagógico",
    ],
    modal: {
      label: "ENSINO FUNDAMENTAL I",
      range: "ANOS INICIAIS (1º AO 5º ANO)",
      paragraphs: [
        "O Ensino Fundamental I do Colégio UniMaster é a fase em que nossos alunos consolidam aprendizagens essenciais, desenvolvem novas habilidades e descobrem seus talentos.",
        "É nesse período que fortalecemos a formação acadêmica, sem abrir mão da formação humana, preparando-os para os próximos desafios da vida escolar e pessoal.",
        "Nosso trabalho vai além dos conteúdos: buscamos desenvolver autonomia intelectual, pensamento crítico, criatividade e respeito ao outro.",
      ],
    },
  },
  {
    id: "fundamental2",
    image: Medio,
    alt: "Ensino Fundamental II",
    icon: <FaGraduationCap />,
    title: "Ensino Fundamental II",
    text: "Aprofundamento acadêmico e preparação para os próximos desafios.",
    items: [
      "Formação acadêmica completa",
      "Projetos e pensamento crítico",
      "Acompanhamento pedagógico",
    ],
    modal: {
      label: "ENSINO FUNDAMENTAL II",
      range: "ANOS FINAIS (6º AO 9º ANO)",
      paragraphs: [
        "No Ensino Fundamental II, os alunos aprofundam os conteúdos, ampliam a autonomia e desenvolvem o pensamento crítico.",
        "Trabalhamos disciplinas de forma integrada, com projetos, responsabilidade e preparação para a vida escolar seguinte.",
        "O ambiente continua acolhedor, com acompanhamento próximo para que cada estudante avance com confiança.",
      ],
    },
  },
];

export default function CoursesSection() {
  const [openCourse, setOpenCourse] = useState(null);
  const selected = courseCards.find((course) => course.id === openCourse);

  return (
    <section className="courses-page">
      <div className="courses-title">
        <span>NOSSOS CURSOS</span>
        <h2>Uma jornada de aprendizado para cada etapa da vida.</h2>
      </div>

      <div className="courses-grid">
        {courseCards.map((course) => (
          <article className="course-card" key={course.id}>
            <img src={course.image} alt={course.alt} />
            <div className="course-content">
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.text}</p>
              <ul>
                {course.items.map((item) => (
                  <li key={item}>
                    <FaCheck />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="saiba-btn"
                onClick={() => setOpenCourse(course.id)}
              >
                Saiba mais →
              </button>
            </div>
          </article>
        ))}
      </div>

      <CTA />

      {selected && (
        <div className="modal-overlay" onClick={() => setOpenCourse(null)}>
          <div className="course-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="close-modal"
              aria-label="Fechar"
              onClick={() => setOpenCourse(null)}
            >
              ×
            </button>

            <div className="modal-content">
              <div className="modal-left">
                <span>{selected.modal.label}</span>
                <p className="modal-range">{selected.modal.range}</p>
                {selected.modal.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="modal-right">
                <img src={selected.image} alt={selected.alt} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
