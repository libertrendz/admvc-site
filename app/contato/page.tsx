// app/contato/page.tsx
import Link from "next/link";

export default function ContatoPage() {
  return (
    <main className="space-y-16">
      {/* HERO (com efeitos consistentes com o resto do site) */}
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
            Fale <span className="text-figueira">Connosco</span>
          </h1>

          <p className="text-muted text-base md:text-lg">
            Estamos à disposição para orar consigo, esclarecer dúvidas ou orientar a sua primeira
            visita.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/congregacoes" className="btn btn-primary">
              Ver congregações
            </Link>
            <Link href="/agenda" className="btn btn-ghost">
              Ver agenda
            </Link>
          </div>

          <div className="pt-2 text-xs text-muted2">
            (Responderemos assim que possível. Deus abençoe.)
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="grid gap-10 md:grid-cols-2">
        {/* FORMULÁRIO */}
        <div className="rounded-2xl border border-soft bg-bg2 p-6">
          <h2 className="text-xl font-semibold text-figueira mb-4">Envie uma mensagem</h2>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            {/* Web3Forms */}
            <input
              type="hidden"
              name="access_key"
              value="1cb78872-30f2-4c57-a2a4-74cbe12ecac7"
            />
            <input type="hidden" name="subject" value="Novo contacto via site ADMVC" />
            <input type="hidden" name="from_name" value="Site ADMVC" />
            <input type="hidden" name="redirect" value="https://www.igrejaadmvc.org/obrigado" />

            {/* Honeypot anti-spam (invisível) */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="block text-sm text-muted mb-1">Nome</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-soft bg-bg px-3 py-2 text-fg outline-none focus:ring-2 focus:ring-[rgba(63,107,79,0.55)]"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm text-muted mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-soft bg-bg px-3 py-2 text-fg outline-none focus:ring-2 focus:ring-[rgba(63,107,79,0.55)]"
                placeholder="seuemail@exemplo.com"
              />
            </div>

            <div>
              <label className="block text-sm text-muted mb-1">Mensagem</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-soft bg-bg px-3 py-2 text-fg outline-none focus:ring-2 focus:ring-[rgba(63,107,79,0.55)]"
                placeholder="Escreva sua mensagem…"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Enviar mensagem
            </button>

            <p className="text-xs text-muted2 pt-1">
              Ao enviar, você concorda em ser contactado pela ADMVC para retorno da mensagem.
            </p>
          </form>
        </div>

        {/* INFORMAÇÕES */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-soft bg-bg2 p-6">
            <h3 className="text-lg font-semibold text-fg mb-2">E-mail</h3>
            <p className="text-muted">admvc@gmail.com</p>
          </div>

          <div className="rounded-2xl border border-soft bg-bg2 p-6">
            <h3 className="text-lg font-semibold text-fg mb-2">Sede</h3>
            <p className="text-muted">
              R. António Pestana Rato 77
              <br />
              3080-014 Figueira da Foz
            </p>

            <div className="pt-3">
              <a
                href="https://www.google.com/maps/place/Igreja+Evang%C3%A9lica+Assembleia+de+Deus+Minist%C3%A9rio+Vis%C3%A3o+de+Conquista+-+ADMVC/@40.1556145,-8.8431124,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-figueira underline underline-offset-4"
              >
                Ver no mapa
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-soft bg-bg2 p-6">
            <h3 className="text-lg font-semibold text-fg mb-2">Primeira visita?</h3>
            <p className="text-muted">
              Se quiser, fale connosco antes e ajudamos a orientar o melhor dia e horário para a
              sua visita.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link href="/agenda" className="btn btn-ghost">
                Ver agenda
              </Link>
              <Link href="/congregacoes" className="btn btn-ghost">
                Ver congregações
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NOTA FINAL */}
      <section className="rounded-2xl border border-soft bg-bg2 p-6">
        <div className="border-l-4 pl-4" style={{ borderColor: "var(--g-figueira)" }}>
          <p className="text-lg italic text-fg">“Servindo a Deus ao servir pessoas.”</p>
          <div className="pt-1 text-sm text-muted2">Marcos 10:45</div>
        </div>
      </section>
    </main>
  );
}
