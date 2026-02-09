// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description:
    "Assembleia de Deus – Ministério Visão de Conquista. Uma igreja acolhedora, comunitária e centrada na Palavra de Deus.",
  metadataBase: new URL("https://example.vercel.app"), // opcional (pode remover)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className="dark">
      <body className="min-h-dvh bg-bg text-fg antialiased">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
