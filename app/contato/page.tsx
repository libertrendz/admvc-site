// app/contato/page.tsx
import Link from "next/link";

export default function ContatoPage() {
  return (
    <main className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-soft bg-bg2 p-6 md:p-12">
        <div className="relative z-10 max-w-3xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-fg">
            Fale <span className="text-figueira">Connosco</span>
          </h1>

          <p className="text-muted text-base md:text-lg">
            Estamos à disposição para orar consigo, esclarecer dúvidas ou
            orientar a sua primeira visita.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="grid gap-10 md:grid-cols-2">
        {/* FORMULÁRIO */}
        <div className="rounded-2xl border border-soft bg-bg2 p-6">
          <h2 className="text-xl font-semibold text-figueira mb-4">
            Envie uma mensagem
          </h2>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            {/* ⚠️ VAMOS COLOCAR SUA CHAVE AQUI DEPOIS */}
            <input type="hidden" name="access_key" value="SUA_ACCESS_KEY_AQUI" />
            <input type="hidden" name="subject" value="Novo contacto via site ADMVC" />
            <input type="hidden" name="from_name" value="Site ADMVC" />
            <input type="hidden" name="redirect" value="https://www.igrejaadmvc.org/obrigado" />

            <div>
              <label className="block text-sm text-muted mb-1">Nome</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-soft bg-bg px-3 py-2 text-fg focus:outline-none focus:ring-2 focus:ring-figueira"
              />
            </div>

            <div>
              <label className="block text-sm text-muted mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-soft bg-bg px-3 py-2 text-fg focus:outline-none focus:ring-2 focus:ring-figueira"
              />
            </div>

            <div>
              <label className="block text-sm text-muted mb-1">Mensagem</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-soft bg-bg px-3 py-2 text-fg focus:outline-none focus:ring-2 focus:ring-figueira"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Enviar mensagem
            </button>
          </form>
        </div>

        {/* INFORMAÇÕES */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-soft bg-bg2 p-6">
            <h3 className="text-lg font-semibold text-fg mb-2">
              E-mail
            </h3>
            <p className="text-muted">admvc@gmail.com</p>
          </div>

          <div className="rounded-2xl border border-soft bg-bg2 p-6">
            <h3 className="text-lg font-semibold text-fg mb-2">
              Sede
            </h3>
            <p className="text-muted">
              R. António Pestana Rato 77<br />
              3080-014 Figueira da Foz
            </p>

            <div className="pt-3">
              <Link
                href="https://maps.google.com"
                target="_blank"
                className="text-figueira underline underline-offset-4"
              >
                Ver no mapa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NOTA FINAL */}
      <section className="rounded-2xl border border-soft bg-bg2 p-6">
        <p className="text-muted italic">
          “Servindo a Deus ao servir pessoas.” — Marcos 10:45
        </p>
      </section>
    </main>
  );
}
