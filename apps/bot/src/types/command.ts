import type {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

export type AtlasCommand = {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
};
