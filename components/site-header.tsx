import Image from "next/image";
import Link from "next/link";
import { MEMBERS_AREA_URL, SITE_NAME } from "@/lib/constants";

const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/congregacoes", label: "Congregações" },
  { href: "/ministerios", label: "Ministérios" },
  { href: "/agenda", label: "Agenda" },
  { href: "/contato", label: "Contato" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-soft bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo container responsivo */}
          <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-2xl border border-soft bg-bg2">
            <Image
              src="/images/logo_admvc.png"
              alt={`${SITE_NAME} — Logo`}
              fill
              sizes="(max-width: 768px) 48px, 56px"
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-base font-semibold text-fg">{SITE_NAME}</div>
            <div className="text-xs text-muted2">
              Figueira da Foz · Leiria · Barcelos
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-muted hover:text-fg transition"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <a
          href={MEMBERS_AREA_URL}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          title="Acesso exclusivo para membros da ADMVC"
        >
          🔒 Área de Membros
        </a>
      </div>
    </header>
  );
}
