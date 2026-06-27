import { requireGlobalAdmin } from "@/lib/permissions";
import { prisma } from "@atlas/db";
import { GlobalSettingsForm } from "@/components/dashboard/global-settings-form";

export default async function GlobalSettingsPage() {
  await requireGlobalAdmin();

  let settings = await prisma.globalSettings.findFirst();

  if (!settings) {
    settings = await prisma.globalSettings.create({
      data: {},
    });
  }

  return (
    <main className="p-6 lg:p-10">
      <div className="mb-8">
        <p className="text-sm text-violet-300">Krypstar Labs</p>
        <h1 className="text-3xl font-semibold">Configurações Globais</h1>
        <p className="mt-2 text-white/60">
          Essas configurações afetam o comportamento do Atlas IA em tempo real.
        </p>
      </div>

      <GlobalSettingsForm settings={settings} />
    </main>
  );
}
