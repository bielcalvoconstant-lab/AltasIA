"use client";

import { useTransition } from "react";
import { saveGlobalSettings } from "@/actions/global-settings";

type Props = {
  settings: {
    botStatus: "ONLINE" | "IDLE" | "DND";
    activityType: "PLAYING" | "LISTENING" | "WATCHING" | "COMPETING";
    activityText: string;
    botBio: string;
    customNote: string | null;
    maintenanceMode: boolean;
    defaultAiModel: string;
    commandPrefix: string;
    logsChannelId: string | null;
    supportGuildId: string | null;
    accentColor: string;
  };
};

export function GlobalSettingsForm({ settings }: Props) {
  const [pending, startTransition] = useTransition();

  return (
    <form
      className="grid gap-6"
      action={(formData) =>
        startTransition(async () => {
          await saveGlobalSettings(formData);
        })
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="mb-2 block text-sm">Status do bot</label>
          <select
            name="botStatus"
            defaultValue={settings.botStatus}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          >
            <option value="ONLINE">Online</option>
            <option value="IDLE">Idle</option>
            <option value="DND">Do Not Disturb</option>
          </select>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="mb-2 block text-sm">Tipo de atividade</label>
          <select
            name="activityType"
            defaultValue={settings.activityType}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          >
            <option value="PLAYING">Playing</option>
            <option value="LISTENING">Listening</option>
            <option value="WATCHING">Watching</option>
            <option value="COMPETING">Competing</option>
          </select>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
          <label className="mb-2 block text-sm">Texto da atividade</label>
          <input
            name="activityText"
            defaultValue={settings.activityText}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
          <label className="mb-2 block text-sm">Bio do bot</label>
          <textarea
            name="botBio"
            defaultValue={settings.botBio}
            className="min-h-28 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
          <label className="mb-2 block text-sm">Nota personalizada</label>
          <textarea
            name="customNote"
            defaultValue={settings.customNote ?? ""}
            className="min-h-28 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="mb-2 block text-sm">Modelo IA padrão</label>
          <input
            name="defaultAiModel"
            defaultValue={settings.defaultAiModel}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="mb-2 block text-sm">Prefixo de comandos</label>
          <input
            name="commandPrefix"
            defaultValue={settings.commandPrefix}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="mb-2 block text-sm">Canal de logs</label>
          <input
            name="logsChannelId"
            defaultValue={settings.logsChannelId ?? ""}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="mb-2 block text-sm">Servidor principal</label>
          <input
            name="supportGuildId"
            defaultValue={settings.supportGuildId ?? ""}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="mb-2 block text-sm">Cor de destaque</label>
          <input
            name="accentColor"
            defaultValue={settings.accentColor}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />
        </div>

        <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 p-6">
          <input
            id="maintenanceMode"
            name="maintenanceMode"
            type="checkbox"
            defaultChecked={settings.maintenanceMode}
            className="mr-3"
          />
          <label htmlFor="maintenanceMode">Modo manutenção</label>
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90 disabled:opacity-50"
      >
        {pending ? "Salvando..." : "Salvar configurações"}
      </button>
    </form>
  );
          }
