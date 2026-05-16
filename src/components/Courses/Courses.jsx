import "./Courses.css";
import { useNavigate } from "react-router-dom";
import Infantil from "../../assets/images/infantil.jpg";
import Fundamental from "../../assets/images/fundamental.jpg";
import Esportes from "../../assets/images/esportes.jpg";

import {
  FaUserFriends,
  FaCheck,
  FaBookOpen,
  FaFutbol
} from "react-icons/fa";


export default function Courses() {

const navigate = useNavigate();
  return (

    <section className="courses">

      <div className="courses-header">

        {/* TEXTO */}

        <div className="courses-text">

          <span>
            NOSSOS CURSOS
          </span>

          <h2>
            Opções de ensino <br />
            para cada fase.
          </h2>

          <p>
            Oferecemos uma formação completa,
            com conteúdos atuais e atividades
            que estimulam o aprendizado.
          </p>

          <button onClick={() => navigate("/cursos")}>
  VER TODOS OS CURSOS
</button>

        </div>

        {/* GRID */}

        <div className="courses-grid">

          {/* EDUCAÇÃO INFANTIL */}

          <div className="card">

            <img
              src={Infantil}
              alt="Educação Infantil"
            />

            <div className="content">

              <div className="icon">
                <FaUserFriends />
              </div>

              <h3>
                  Educação Infantil
                <p>Maternal ao Infantil 5</p>
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

            </div>

          </div>

          {/* ENSINO FUNDAMENTAL */}

          <div className="card">

            <img
              src={Fundamental}
              alt="Ensino Fundamental"
            />

            <div className="content">

              <div className="icon">
                <FaBookOpen />
              </div>

              <h3>
                Ensino Fundamental
                <p>1º ao 5º ano e Anos Finais 6º ao 9º ano</p>
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

            </div>

          </div>

          {/* ESPORTES */}

          <div className="card">

            <img
              src={Esportes}
              alt="Esportes"
            />

            <div className="content">

              <div className="icon">
                <FaFutbol />
              </div>

              <h3>
                Esportes
                <p>Melhor estrutura para a prática de esportes.</p>
              </h3>

              <p>
                Desenvolvimento físico,
                disciplina, trabalho em equipe
                e qualidade de vida.
              </p>

              <ul>

                <li>
                  <FaCheck />
                  Futsal, Vôlei, Ballet, karatê e Xadrez
                </li>

                <li>
                  <FaCheck />
                  Coordenação motora
                </li>

                <li>
                  <FaCheck />
                  Espírito esportivo
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}