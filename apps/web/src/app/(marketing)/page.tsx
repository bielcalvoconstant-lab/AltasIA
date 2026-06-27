import { ArrowRight, Bot, Shield, Sparkles, Gauge } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_right,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
              Atlas IA por Krypstar Labs
            </div>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Seu bot com IA no Discord,
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {" "}
                com painel profissional
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/70">
              Atlas IA une automação, inteligência artificial e gerenciamento
              centralizado em uma experiência premium criada pela Krypstar Labs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Entrar com Discord
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href="#funcionalidades"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                Ver funcionalidades
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Bot,
              title: "Bot inteligente",
              description: "Respostas com IA integradas ao Discord.",
            },
            {
              icon: Shield,
              title: "Controle central",
              description: "Permissões e configurações globais protegidas.",
            },
            {
              icon: Gauge,
              title: "Tempo real",
              description: "Atualizações refletidas no bot rapidamente.",
            },
            {
              icon: Sparkles,
              title: "Experiência premium",
              description: "UI clean com branding forte da Krypstar Labs.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <item.icon className="mb-4 h-5 w-5 text-violet-300" />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-white/65">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
