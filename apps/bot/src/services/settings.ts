import { prisma } from "@atlas/db";

export async function getGlobalSettings() {
  let settings = await prisma.globalSettings.findFirst();

  if (!settings) {
    settings = await prisma.globalSettings.create({ data: {} });
  }

  return settings;
}
