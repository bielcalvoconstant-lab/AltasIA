import { prisma } from "../src/client";

async function main() {
  const existing = await prisma.globalSettings.findFirst();

  if (!existing) {
    await prisma.globalSettings.create({
      data: {
        botStatus: "ONLINE",
        activityType: "WATCHING",
        activityText: "a comunidade Krypstar",
        botBio: "Atlas IA por Krypstar Labs",
        customNote: "Responder de forma útil, clara e profissional.",
        defaultAiModel: "gpt-4o-mini",
        commandPrefix: "/",
        accentColor: "#7c3aed",
      },
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
