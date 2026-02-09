// components/site-header.tsx
import Link from "next/link";
import { MEMBERS_AREA_URL, SITE_NAME } from "@/lib/constants";

const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/congregacoes", label: "Congregações" },
  { href: "/ministerios", label: "Ministérios" },
  { href: "/agenda", label: "Agenda" },
  { href: "/contato", label: "Contato" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-soft bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-bg2 border border-soft" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">{SITE_NAME}</div>
            <div className="text-xs text-muted2">Figueira da Foz · Leiria · Barcelos</div>
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

        <div className="flex items-center gap-2">
          <a
            href={MEMBERS_AREA_URL}
            className="btn btn-primary"
            rel="noopener noreferrer"
            target="_blank"
          >
            🔒 Área de Membros
          </a>
        </div>
      </div>
    </header>
  );
}
