import "dotenv/config";
import { client } from "./client";
import { pingCommand } from "./commands/ping";
import { infoCommand } from "./commands/info";
import { askCommand } from "./commands/ask";
import { readyEvent } from "./events/ready";
import { interactionCreateEvent } from "./events/interactionCreate";

const commands = [pingCommand, infoCommand, askCommand];

for (const command of commands) {
  client.commands.set(command.data.name, command);
}

client.once(readyEvent.name, readyEvent.execute);
client.on(interactionCreateEvent.name, interactionCreateEvent.execute);

client.login(process.env.DISCORD_BOT_TOKEN);
