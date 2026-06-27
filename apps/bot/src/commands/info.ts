import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import type { AtlasCommand } from "../types/command";
import { getGlobalSettings } from "../services/settings";

export const infoCommand: AtlasCommand = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Mostra informações do Atlas IA"),
  async execute(interaction) {
    const settings = await getGlobalSettings();

    const embed = new EmbedBuilder()
      .setTitle("Atlas IA")
      .setDescription(settings.botBio)
      .addFields(
        { name: "Empresa", value: "Krypstar Labs", inline: true },
        { name: "Status", value: settings.botStatus, inline: true },
        { name: "Modelo IA", value: settings.defaultAiModel, inline: true },
      )
      .setColor(settings.accentColor as `#${string}`);

    await interaction.reply({ embeds: [embed] });
  },
};
