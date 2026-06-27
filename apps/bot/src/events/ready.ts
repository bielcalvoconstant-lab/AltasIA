import { Events } from "discord.js";
import { applyPresence } from "../services/presence";

export const readyEvent = {
  name: Events.ClientReady,
  once: true,
  async execute(client: any) {
    console.log(`Bot online: ${client.user.tag}`);
    await applyPresence();

    setInterval(async () => {
      await applyPresence();
    }, 30_000);
  },
};
