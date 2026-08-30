import "./Benefits.css";

import {
  GraduationCap,
  Users,
  Star,
  Heart,
} from "lucide-react";

export default function Benefits() {
  return (
    <section className="benefits">

      <div className="benefits-card">

        <div className="benefit-item">

          <div className="icon-box">
            <GraduationCap
              size={26}
              fill="currentColor"
              strokeWidth={1.5}
            />
          </div>

          <div>
            <h3>Ensino de Qualidade</h3>

            <p>
              Metodologia moderna com foco no aprendizado.
            </p>
          </div>

        </div>

        <div className="benefit-item">

          <div className="icon-box">
            <Users
              size={26}
              fill="currentColor"
              strokeWidth={1.5}
            />
          </div>

          <div>
            <h3>Turmas Reduzidas</h3>

            <p>
              Mais atenção e acompanhamento para cada aluno.
            </p>
          </div>

        </div>

        <div className="benefit-item">

          <div className="icon-box">
            <Star
              size={26}
              fill="currentColor"
              strokeWidth={1.5}
            />
          </div>

          <div>
            <h3>Formação Completa</h3>

            <p>
              Desenvolvimento intelectual, emocional e social.
            </p>
          </div>

        </div>

        <div className="benefit-item">

          <div className="icon-box">
            <Heart
              size={26}
              fill="currentColor"
              strokeWidth={1.5}
            />
          </div>

          <div>
            <h3>Ambiente Acolhedor</h3>

            <p>
              Respeito, incentivo e cuidado em cada etapa.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}