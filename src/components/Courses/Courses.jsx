import { useNavigate } from "react-router-dom";
import { FaUserFriends, FaCheck, FaBookOpen, FaFutbol } from "react-icons/fa";

import Infantil from "../../assets/images/infantil.jpg";
import Fundamental from "../../assets/images/fundamental.jpg";
import Esportes from "../../assets/images/esportes.jpg";
import "./Courses.css";

const courses = [
  {
    image: Infantil,
    alt: "Educação Infantil",
    icon: <FaUserFriends />,
    title: "Educação Infantil",
    range: "Maternal ao Infantil 5",
    text: "Aprender brincando, explorando o mundo e desenvolvendo as primeiras habilidades.",
    items: [
      "Atividades lúdicas",
      "Desenvolvimento socioemocional",
      "Alfabetização e letramento",
    ],
  },
  {
    image: Fundamental,
    alt: "Ensino Fundamental",
    icon: <FaBookOpen />,
    title: "Ensino Fundamental",
    range: "1º ao 9º ano",
    text: "Base sólida de conhecimentos para formar alunos preparados.",
    items: [
      "Componentes curriculares completos",
      "Projetos interdisciplinares",
      "Acompanhamento pedagógico",
    ],
  },
  {
    image: Esportes,
    alt: "Esportes",
    icon: <FaFutbol />,
    title: "Esportes",
    range: "Estrutura para a prática esportiva",
    text: "Desenvolvimento físico, disciplina e trabalho em equipe.",
    items: ["Futsal, vôlei, ballet e karatê", "Coordenação motora", "Espírito esportivo"],
  },
];

export default function Courses() {
  const navigate = useNavigate();

  return (
    <section className="courses">
      <div className="courses-header">
        <div className="courses-text">
          <span>NOSSOS CURSOS</span>
          <h2>
            Opções de ensino
            <br />
            para cada fase.
          </h2>
          <p>
            Oferecemos uma formação completa, com conteúdos atuais e atividades
            que estimulam o aprendizado.
          </p>
          <button type="button" onClick={() => navigate("/cursos")}>
            VER TODOS OS CURSOS
          </button>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <article className="card" key={course.title}>
              <img src={course.image} alt={course.alt} />
              <div className="content">
                <div className="icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <p className="course-range">{course.range}</p>
                <p>{course.text}</p>
                <ul>
                  {course.items.map((item) => (
                    <li key={item}>
                      <FaCheck />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
