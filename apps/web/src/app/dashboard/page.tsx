import { requireAuth } from "@/lib/permissions";
import { prisma } from "@atlas/db";

export default async function DashboardPage() {
  const session = await requireAuth();
  const settings = await prisma.globalSettings.findFirst();

  return (
    <main className="p-6 lg:p-10">
      <div className="mb-8">
        <p className="text-sm text-violet-300">Atlas IA por Krypstar Labs</p>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="mt-2 text-white/60">
          Bem-vindo, {session.user.name}. Aqui você acompanha as informações
          principais do bot.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/50">Status</p>
          <h3 className="mt-2 text-2xl font-semibold">
            {settings?.botStatus ?? "ONLINE"}
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/50">Atividade</p>
          <h3 className="mt-2 text-2xl font-semibold">
            {settings?.activityType ?? "WATCHING"}
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/50">Modelo IA</p>
          <h3 className="mt-2 text-2xl font-semibold">
            {settings?.defaultAiModel ?? "gpt-4o-mini"}
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/50">Modo manutenção</p>
          <h3 className="mt-2 text-2xl font-semibold">
            {settings?.maintenanceMode ? "Ativo" : "Desativado"}
          </h3>
        </div>
      </div>
    </main>
  );
}
