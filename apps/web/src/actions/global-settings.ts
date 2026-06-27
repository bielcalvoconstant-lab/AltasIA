"use server";

import { prisma } from "@atlas/db";
import { requireGlobalAdmin } from "@/lib/permissions";

export async function saveGlobalSettings(formData: FormData) {
  const session = await requireGlobalAdmin();

  const data = {
    botStatus: String(formData.get("botStatus")) as "ONLINE" | "IDLE" | "DND",
    activityType: String(formData.get("activityType")) as
      | "PLAYING"
      | "LISTENING"
      | "WATCHING"
      | "COMPETING",
    activityText: String(formData.get("activityText") || ""),
    botBio: String(formData.get("botBio") || ""),
    customNote: String(formData.get("customNote") || ""),
    maintenanceMode: formData.get("maintenanceMode") === "on",
    defaultAiModel: String(formData.get("defaultAiModel") || "gpt-4o-mini"),
    commandPrefix: String(formData.get("commandPrefix") || "/"),
    logsChannelId: String(formData.get("logsChannelId") || "") || null,
    supportGuildId: String(formData.get("supportGuildId") || "") || null,
    accentColor: String(formData.get("accentColor") || "#7c3aed"),
    updatedByEmail: session.user.email!,
  };

  const existing = await prisma.globalSettings.findFirst();

  if (!existing) {
    await prisma.globalSettings.create({ data });
  } else {
    await prisma.globalSettings.update({
      where: { id: existing.id },
      data,
    });
  }

  await prisma.botRuntimeCache.upsert({
    where: { key: "global_settings" },
    update: { value: data },
    create: { key: "global_settings", value: data },
  });

  return { ok: true };
}
