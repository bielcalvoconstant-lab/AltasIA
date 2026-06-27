import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="mb-2 text-sm text-violet-300">Krypstar Labs</p>
        <h1 className="text-2xl font-semibold">Entrar no Atlas IA</h1>
        <p className="mt-2 text-sm text-white/65">
          Faça login exclusivamente com sua conta Discord para acessar o painel.
        </p>

        <form
          action={async () => {
            "use server";
            await signIn("discord", { redirectTo: "/dashboard" });
          }}
          className="mt-6"
        >
          <button
            type="submit"
            className="w-full rounded-xl bg-white px-4 py-3 font-medium text-black transition hover:bg-white/90"
          >
            Continuar com Discord
          </button>
        </form>
      </div>
    </main>
  );
}
