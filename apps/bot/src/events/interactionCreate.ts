import { Events } from "discord.js";
import { client } from "../client";

export const interactionCreateEvent = {
  name: Events.InteractionCreate,
  async execute(interaction: any) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);

      if (interaction.deferred || interaction.replied) {
        await interaction.editReply("Ocorreu um erro ao executar este comando.");
      } else {
        await interaction.reply({
          content: "Ocorreu um erro ao executar este comando.",
          ephemeral: true,
        });
      }
    }
  },
};
