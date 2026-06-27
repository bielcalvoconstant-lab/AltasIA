import { SlashCommandBuilder } from "discord.js";
import type { AtlasCommand } from "../types/command";
import { askAtlas } from "../services/ai";
import { getGlobalSettings } from "../services/settings";

export const askCommand: AtlasCommand = {
  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Faça uma pergunta para o Atlas IA")
    .addStringOption((option) =>
      option
        .setName("pergunta")
        .setDescription("O que você quer perguntar?")
        .setRequired(true),
    ),
  async execute(interaction) {
    const settings = await getGlobalSettings();

    if (settings.maintenanceMode) {
      await interaction.reply({
        content:
          "O Atlas IA está em modo manutenção no momento. Tente novamente mais tarde.",
        ephemeral: true,
      });
      return;
    }

    const prompt = interaction.options.getString("pergunta", true);

    await interaction.deferReply();

    const response = await askAtlas(prompt);

    await interaction.editReply(response.slice(0, 1900));
  },
};
