import { requireAuth } from "@/lib/permissions";
import Link from "next/link";
import { LayoutDashboard, Settings2, Bot, LogOut } from "lucide-react";
import { isGlobalAdmin } from "@atlas/shared/permissions";
import { signOut } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAuth();
  const canManageGlobals = isGlobalAdmin(session.user.email);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="flex">
        <aside className="hidden min-h-screen w-72 border-r border-white/10 bg-white/5 p-6 lg:block">
          <div>
            <p className="text-sm text-violet-300">Krypstar Labs</p>
            <h2 className="mt-1 text-xl font-semibold">Atlas IA</h2>
          </div>

          <nav className="mt-8 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>

            {canManageGlobals && (
              <Link
                href="/dashboard/globals"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Settings2 className="h-4 w-4" />
                Configurações Globais
              </Link>
            )}
          </nav>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-blue-300" />
              <div>
                <p className="text-sm font-medium">{session.user.name}</p>
                <p className="text-xs text-white/50">{session.user.email}</p>
              </div>
            </div>

            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
              className="mt-4"
            >
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10">
                <LogOut className="h-4 w-4" />
                Sair
              </button>
            </form>
          </div>
        </aside>

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
