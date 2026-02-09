// app/agenda/page.tsx
import Link from "next/link";

type Evento = {
  dia: string;
  hora: string;
  titulo: string;
  descricao: string;
  badge?: string;
};

const SEDE_SEMANAL: Evento[] = [
  {
    dia: "Quarta-feira",
    hora: "A partir das 20:00",
    titulo: "Culto — Quartas Proféticas",
    descricao:
      "Um tempo de oração, palavra e sensibilidade à direção de Deus, marcado pela busca espiritual, encorajamento e edificação da igreja."
  },
  {
    dia: "Quinta-feira",
    hora: "A partir das 20:00",
    titulo: "Escola de Líderes",
    badge: "Exclusivo para membros",
    descricao:
      "Formação, discipulado e preparação de líderes, com foco em alinhamento espiritual e fortalecimento da liderança cristã."
  },
  {
    dia: "Sexta-feira",
    hora: "A partir das 20:00",
    titulo: "Faculdade de Teologia",
    descricao:
      "Ensino teológico com base bíblica sólida, voltado para aprofundar o conhecimento da Palavra de Deus e preparar obreiros para o serviço cristão."
  },
  {
    dia: "Sábado",
    hora: "Horários definidos por grupo",
    titulo: "Reuniões de Grupos Específicos",
    badge: "Exclusivo para membros",
    descricao:
      "Encontros organizados por perfil — Homens, Mulheres e Jovens — com foco em comunhão, discipulado e aplicação prática da fé cristã."
  },
  {
    dia: "Domingo",
    hora: "10:00 e 17:00",
    titulo: "Culto da Família",
    descricao:
      "O principal encontro da igreja, com louvor, palavra, comunhão e edificação espiritual para toda a família."
  }
];

export default function AgendaPage() {
  return (
    <main className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-soft bg-bg2 p-6 md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(63,107,79,0.35)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(127,174,147,0.18)" }}
        />

        <div className="relative z-10 max-w-3xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-fg">
            Agenda <span className="text-figueira">Semanal</span>
          </h1>

          <p className="text-muted text-base md:text-lg">
            Encontros regulares da ADMVC — momentos de culto, ensino, discipulado e comunhão
            para toda a igreja.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/congregacoes" className="btn btn-primary">
              Ver congregações
            </Link>
            <Link href="/contato" className="btn btn-ghost">
              Fale connosco
            </Link>
          </div>
        </div>
      </section>

      {/* SEDE */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-figueira">
            Sede — Figueira da Foz
          </h2>
          <p className="text-muted">
            Agenda semanal da sede da ADMVC.
          </p>
        </div>

        {/* Tabela desktop */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-soft bg-bg2">
          <table className="w-full text-sm">
            <thead className="bg-bg">
              <tr>
                <th className="w-40 px-6 py-4 text-left text-muted whitespace-nowrap">
                  Dia
                </th>
                <th className="px-6 py-4 text-left text-muted">
                  Horário
                </th>
                <th className="px-6 py-4 text-left text-muted">
                  Encontro
                </th>
                <th className="px-10 py-4 text-left text-muted">
                  Descrição
                </th>
              </tr>
            </thead>
            <tbody>
              {SEDE_SEMANAL.map((e, idx) => (
                <tr key={`${e.dia}-${idx}`} className="border-t border-soft">
                  <td className="px-6 py-5 font-medium text-fg whitespace-nowrap">
                    {e.dia}
                  </td>
                  <td className="px-6 py-5 text-fg">
                    {e.hora}
                  </td>
                  <td className="px-6 py-5 text-fg">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: "var(--g-figueira)" }}
                      />
                      <span className="font-semibold">{e.titulo}</span>
                      {e.badge && (
                        <span className="ml-2 rounded-full border border-soft bg-bg px-2 py-0.5 text-xs text-muted">
                          {e.badge}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-10 py-5 text-muted leading-relaxed">
                    {e.descricao}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards permanecem iguais */}
      </section>

      {/* CTA FINAL */}
      <section className="rounded-2xl border border-soft bg-bg2 p-6 md:p-10 space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-fg">
          Vai visitar-nos pela primeira vez?
        </h3>
        <p className="text-muted">
          Será um prazer recebê-lo. Se quiser, entre em contacto antes e ajudamos a
          orientar o melhor dia e horário para a sua visita.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contato" className="btn btn-primary">
            Contacto
          </Link>
          <Link href="/sobre" className="btn btn-ghost">
            Conheça a ADMVC
          </Link>
        </div>
      </section>
    </main>
  );
}
