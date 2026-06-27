import { Client, GatewayIntentBits, Partials, Collection } from "discord.js";
import type { AtlasCommand } from "./types/command";

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
}) as Client & {
  commands: Collection<string, AtlasCommand>;
};

client.commands = new Collection();
