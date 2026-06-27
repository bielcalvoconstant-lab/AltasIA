import { ActivityType, PresenceUpdateStatus } from "discord.js";
import { client } from "../client";
import { getGlobalSettings } from "./settings";

export async function applyPresence() {
  const settings = await getGlobalSettings();

  const statusMap: Record<string, PresenceUpdateStatus> = {
    ONLINE: "online",
    IDLE: "idle",
    DND: "dnd",
  };

  const activityMap: Record<string, ActivityType> = {
    PLAYING: ActivityType.Playing,
    LISTENING: ActivityType.Listening,
    WATCHING: ActivityType.Watching,
    COMPETING: ActivityType.Competing,
  };

  client.user?.setPresence({
    status: statusMap[settings.botStatus] ?? "online",
    activities: [
      {
        name: settings.activityText,
        type: activityMap[settings.activityType] ?? ActivityType.Watching,
      },
    ],
  });
}
