// app/permanecer/page.tsx
import Link from "next/link";
import { MEMBERS_AREA_URL } from "@/lib/constants";

export default function PermanecerPage() {
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
          <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-bg px-3 py-1 text-xs text-muted">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--g-figueira)" }}
            />
            Integração à Membresia
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold text-fg">
            <span className="text-figueira">Permanecer</span>
          </h1>

          <p className="text-muted text-base md:text-lg">
            Um caminho consciente de integração à membresia da ADMVC — mais do que um cadastro,
            um compromisso espiritual e comunitário, assumido diante de Deus e da igreja.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contato" className="btn btn-primary">
              Quero iniciar
            </Link>

            <Link href="/sobre" className="btn btn-ghost">
              Conhecer a ADMVC
            </Link>

            <a
              href={MEMBERS_AREA_URL}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              title="Acesso exclusivo para membros da ADMVC"
            >
              🔒 Área de Membros
            </a>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="grid gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5 space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-figueira">
            O que é o Permanecer?
          </h2>
          <p className="text-muted">
            O <strong className="text-fg">Permanecer</strong> é o processo de integração à membresia
            da Assembleia de Deus – Ministério Visão de Conquista (ADMVC).
          </p>
          <p className="text-muted">
            Mais do que um cadastro, é um <strong className="text-fg">compromisso consciente</strong>,
            espiritual e comunitário, assumido diante de Deus e da igreja.
          </p>
          <p className="text-muted">
            Fazer parte da igreja local envolve relacionamento, responsabilidade e alinhamento com a
            visão, os princípios e a forma de caminhar da ADMVC.
          </p>
        </div>

        <div className="md:col-span-7 grid gap-4 md:grid-cols-2">
          <InfoCard
            title="Clareza"
            desc="Entender quem somos, no que cremos e como caminhamos como igreja."
          />
          <InfoCard
            title="Unidade"
            desc="Promover alinhamento espiritual e comunhão saudável entre irmãos."
          />
          <InfoCard
            title="Cuidado"
            desc="Fortalecer vínculos reais e uma caminhada orientada com a liderança."
          />
          <InfoCard
            title="Compromisso"
            desc="Assumir responsabilidade cristã e participação na vida da igreja."
          />
        </div>
      </section>

      {/* POR QUE É IMPORTANTE */}
      <section className="rounded-2xl border border-soft bg-bg2 p-6 md:p-10 space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-figueira">
          Por que o Permanecer é importante?
        </h2>

        <p className="text-muted">
          Na ADMVC, a membresia não é automática nem superficial. Ela representa uma decisão madura
          de caminhar em comunhão, submeter-se à liderança espiritual e participar ativamente da vida
          da igreja.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          <BulletCard text="Garantir clareza sobre quem somos e no que cremos." />
          <BulletCard text="Promover unidade doutrinária e espiritual." />
          <BulletCard text="Estabelecer relacionamento saudável com a liderança e a comunidade." />
          <BulletCard text="Evitar vínculos rasos ou apenas ocasionais." />
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-figueira">
          Para quem é o Permanecer?
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <Tile
            title="Quem deseja tornar-se membro"
            desc="Pessoas que querem integrar-se formalmente à membresia da ADMVC."
          />
          <Tile
            title="Quem já congrega e quer firmar compromisso"
            desc="Cristãos que desejam assumir uma caminhada mais estável e responsável."
          />
          <Tile
            title="Quem quer servir e crescer"
            desc="Pessoas que buscam discipulado, comunhão e serviço na igreja local."
          />
        </div>
      </section>

      {/* O QUE ENVOLVE */}
      <section className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-figueira">
              O que envolve o processo?
            </h2>
            <p className="text-muted">
              Integração com entendimento, compromisso e cuidado — sem pressa, sem confusão.
            </p>
          </div>

          <Link href="/contato" className="text-figueira underline underline-offset-4">
            Tenho dúvidas
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <StepCard
            title="📖 Alinhamento Espiritual"
            desc="Compreensão da fé cristã, da doutrina bíblica e dos princípios que orientam a ADMVC."
          />
          <StepCard
            title="🤝 Compromisso Comunitário"
            desc="Entendimento da igreja como corpo, família espiritual e espaço de cuidado mútuo."
          />
          <StepCard
            title="🛡️ Concordância com Diretrizes"
            desc="Aceitação consciente das diretrizes, valores e normas internas, preservando ordem, unidade e bom testemunho cristão."
          />
          <StepCard
            title="🧭 Caminhada Orientada"
            desc="Acompanhamento pastoral e integração progressiva à vida da igreja."
          />
        </div>
      </section>

      {/* NÃO É OBRIGAÇÃO + TEXTO BÍBLICO */}
      <section className="rounded-2xl border border-soft bg-bg2 p-6 md:p-10 space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-figueira">
          Permanecer não é obrigação
        </h2>

        <p className="text-muted">
          Ninguém é forçado a tornar-se membro. O Permanecer é um convite, não uma imposição.
          A ADMVC acolhe visitantes, amigos e participantes, respeitando o tempo e a caminhada de
          cada pessoa.
        </p>

        <blockquote className="border-l-4 pl-4 italic text-fg" style={{ borderColor: "var(--g-figueira)" }}>
          “Se vós permanecerdes em mim, e as minhas palavras permanecerem em vós…”
          <div className="pt-1 text-sm text-muted2 not-italic">João 15:7</div>
        </blockquote>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="grid gap-4 md:grid-cols-2">
        <Callout
          title="Próximo passo"
          desc="Se deseja iniciar o processo ou saber mais, fale connosco. Teremos prazer em orientar, esclarecer dúvidas e caminhar consigo."
          ctaLabel="Quero iniciar"
          ctaHref="/contato"
          variant="figueira"
        />

        <Callout
          title="Área de Membros"
          desc="Acesso exclusivo para membros da ADMVC. O nome do app aparece apenas no ecrã de login."
          ctaLabel="Entrar"
          ctaHref={MEMBERS_AREA_URL}
          external
          variant="soft"
          lock
        />
      </section>
    </main>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-soft bg-bg2 p-5">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--g-soft)" }} />
        <h3 className="font-semibold text-fg">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted">{desc}</p>
    </div>
  );
}

function BulletCard({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-soft bg-bg p-4">
      <div className="flex items-start gap-2 text-sm text-muted">
        <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--g-figueira)" }} />
        <span>{text}</span>
      </div>
    </div>
  );
}

function Tile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-soft bg-bg2 p-5">
      <h3 className="font-semibold text-fg">{title}</h3>
      <p className="mt-2 text-sm text-muted">{desc}</p>
    </div>
  );
}

function StepCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-soft bg-bg2 p-5">
      <h3 className="font-semibold text-fg">{title}</h3>
      <p className="mt-2 text-sm text-muted">{desc}</p>
    </div>
  );
}

function Callout({
  title,
  desc,
  ctaLabel,
  ctaHref,
  external,
  variant,
  lock
}: {
  title: string;
  desc: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
  variant: "figueira" | "soft";
  lock?: boolean;
}) {
  const bg = variant === "figueira" ? "rgba(63,107,79,0.16)" : "rgba(127,174,147,0.12)";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-soft bg-bg2 p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl"
        style={{ background: bg }}
      />
      <div className="relative z-10 space-y-3">
        <h3 className="text-lg font-semibold text-fg">
          {lock ? "🔒 " : ""}
          {title}
        </h3>
        <p className="text-sm text-muted">{desc}</p>

        {external ? (
          <a href={ctaHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            {ctaLabel}
          </a>
        ) : (
          <Link href={ctaHref} className="btn btn-primary">
            {ctaLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
