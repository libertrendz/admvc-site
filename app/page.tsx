// app/page.tsx
import Link from "next/link";
import { MEMBERS_AREA_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="space-y-16">
      {/* HERO (com imagem real + overlays para legibilidade) */}
      <section className="relative overflow-hidden rounded-2xl border border-soft bg-bg2">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero_teste.png"
            alt="Culto e comunhão na ADMVC"
            className="h-full w-full object-cover object-center"
          />

          {/* Overlay principal (legibilidade) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

          {/* Toque institucional (verde figueira) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(63,107,79,0.35)] via-transparent to-transparent" />

          {/* Vignette suave */}
          <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.65)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs text-white/90 backdrop-blur">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--g-figueira)" }}
              />
              {SITE_NAME} • Figueira da Foz · Leiria · Barcelos
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              {SITE_TAGLINE.includes("uma família") ? (
                <>
                  Mais que uma igreja,{" "}
                  <span className="text-figueira drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                    uma família
                  </span>
                </>
              ) : (
                <span className="text-figueira">{SITE_TAGLINE}</span>
              )}
            </h1>

            <p className="max-w-2xl text-base md:text-lg text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Um lugar de acolhimento, comunhão e crescimento espiritual, onde vivemos o amor
              de Cristo e caminhamos juntos como corpo.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/congregacoes" className="btn btn-primary">
                Visite-nos
              </Link>

              <a
                href={MEMBERS_AREA_URL}
                className="btn btn-ghost bg-black/35 text-white border-white/25 hover:bg-black/55"
                target="_blank"
                rel="noopener noreferrer"
                title="Acesso exclusivo para membros da ADMVC"
              >
                🔒 Área de Membros
              </a>

              <Link
                href="/permanecer"
                className="btn btn-ghost bg-black/35 text-white border-white/25 hover:bg-black/55"
              >
                Permanecer
              </Link>
            </div>

            <div className="pt-4 text-xs text-white/80 italic drop-shadow-[0_1px_6px_rgba(0,0,0,0.75)]">
              “Onde não há visão, o povo perece.” — Provérbios 29:18a
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="grid gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5 space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-figueira">Quem somos</h2>
          <p className="text-muted">
            A Assembleia de Deus – Ministério Visão de Conquista é uma igreja cristã comprometida
            com a Palavra de Deus, com a família e com a transformação de vidas por meio do
            Evangelho de Jesus Cristo.
          </p>
          <p className="text-muted">
            Vivemos a fé de forma comunitária, acreditando que o crescimento espiritual acontece
            quando caminhamos juntos em amor, unidade e serviço.
          </p>

          <div className="pt-2">
            <Link href="/sobre" className="text-figueira underline underline-offset-4">
              Conheça a ADMVC
            </Link>
          </div>
        </div>

        <div className="md:col-span-7 grid gap-4 md:grid-cols-2">
          <FeatureCard title="Acolhimento" desc="Uma comunidade que recebe, cuida e caminha junto." />
          <FeatureCard title="Discipulado" desc="Crescimento espiritual com base na Palavra de Deus." />
          <FeatureCard title="Serviço" desc="Servir é parte da nossa cultura cristã e comunitária." />
          <FeatureCard title="Unidade" desc="Mais que uma igreja, uma família — em amor e comunhão." />
        </div>
      </section>

      {/* CONGREGAÇÕES */}
      <section className="space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-figueira">
              Nossas Congregações
            </h2>
            <p className="text-muted">Sede como principal, com congregações em Leiria e Barcelos.</p>
          </div>
          <Link href="/congregacoes" className="text-figueira underline underline-offset-4">
            Ver horários e endereços
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <PlaceCard badge="Sede" title="Figueira da Foz" desc="Cultos e encontros semanais" accent="figueira" />
          <PlaceCard badge="Congregação" title="Leiria" desc="Uma comunidade em crescimento" accent="soft" />
          <PlaceCard badge="Congregação" title="Barcelos" desc="Caminhando juntos em fé" accent="deep" />
        </div>
      </section>

      {/* VIDA NA IGREJA / MINISTÉRIOS */}
      <section className="space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-figueira">Vida na Igreja</h2>
            <p className="text-muted">
              Ministérios que fortalecem a fé, a comunhão e o serviço.
            </p>
          </div>
          <Link href="/ministerios" className="text-figueira underline underline-offset-4">
            Conheça nossos ministérios
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <MiniCard title="Infantil" />
          <MiniCard title="Jovens" />
          <MiniCard title="Louvor" />
          <MiniCard title="Ação Social" />
          <MiniCard title="Família" />
          <MiniCard title="Discipulado" />
        </div>
      </section>

      {/* ÂNCORA BÍBLICA */}
      <section className="rounded-2xl border border-soft bg-bg2 p-6">
        <div className="border-l-4 pl-4" style={{ borderColor: "var(--g-figueira)" }}>
          <p className="text-lg md:text-xl italic text-fg">“Onde não há visão, o povo perece.”</p>
          <div className="pt-1 text-sm text-muted2">Provérbios 29:18a</div>
        </div>
      </section>

      {/* PERMANECER + ÁREA DE MEMBROS */}
      <section className="grid gap-4 md:grid-cols-2">
        <Callout
          title="Quer tornar-se membro?"
          desc="O Permanecer é o processo de integração consciente à membresia da ADMVC, com alinhamento, comunhão e compromisso."
          ctaLabel="Conheça o Permanecer"
          ctaHref="/permanecer"
          variant="soft"
        />

        <Callout
          title="Área de Membros"
          desc="Acesso exclusivo para membros da ADMVC. Entre para acompanhar comunicados e atividades internas."
          ctaLabel="Entrar"
          ctaHref={MEMBERS_AREA_URL}
          external
          variant="figueira"
          lock
        />
      </section>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-soft bg-bg2 p-5">
      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: "var(--g-soft)" }}
        />
        <h3 className="font-semibold text-fg">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted">{desc}</p>
    </div>
  );
}

function PlaceCard({
  badge,
  title,
  desc,
  accent
}: {
  badge: string;
  title: string;
  desc: string;
  accent: "figueira" | "deep" | "soft";
}) {
  const accentColor =
    accent === "figueira"
      ? "rgba(63,107,79,0.18)"
      : accent === "deep"
      ? "rgba(46,79,58,0.18)"
      : "rgba(127,174,147,0.18)";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-soft bg-bg2 p-5">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl"
        style={{ background: accentColor }}
      />
      <div className="relative z-10 space-y-2">
        <div className="inline-flex items-center rounded-full border border-soft bg-bg px-3 py-1 text-xs text-muted">
          {badge}
        </div>
        <h3 className="text-lg font-semibold text-fg">{title}</h3>
        <p className="text-sm text-muted">{desc}</p>
      </div>
    </div>
  );
}

function MiniCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-soft bg-bg2 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-fg">{title}</h3>
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: "var(--g-figueira)" }}
        />
      </div>
      <p className="mt-2 text-sm text-muted">
        Conteúdo e atividades voltadas para edificação e comunhão.
      </p>
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
  const bg =
    variant === "figueira" ? "rgba(63,107,79,0.16)" : "rgba(127,174,147,0.12)";

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
