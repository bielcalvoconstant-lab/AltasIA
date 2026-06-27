import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { getGlobalSettings } from "./settings";

export async function askAtlas(prompt: string) {
  const settings = await getGlobalSettings();

  const result = await generateText({
    model: openai(settings.defaultAiModel),
    system: `
Você é o Atlas IA, um assistente do Discord criado pela Krypstar Labs.
Seja útil, direto, inteligente e amigável.
Nota global: ${settings.customNote ?? "nenhuma"}.
Bio do bot: ${settings.botBio}.
Modo manutenção: ${settings.maintenanceMode ? "ativo" : "inativo"}.
    `,
    prompt,
  });

  return result.text;
}
