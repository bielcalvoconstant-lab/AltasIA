import { SlashCommandBuilder } from "discord.js";
import type { AtlasCommand } from "../types/command";

export const pingCommand: AtlasCommand = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Verifica a latência do Atlas IA"),
  async execute(interaction) {
    await interaction.reply({
      content: `Pong! Latência: ${interaction.client.ws.ping}ms`,
      ephemeral: true,
    });
  },
};
