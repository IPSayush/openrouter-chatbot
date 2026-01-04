import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function chat() {
  const res = await client.chat.completions.create({
model: "nvidia/nemotron-nano-9b-v2:free",
    messages: [
      { role: "user", content: "are you chat gpt?" }
    ],
  });

  console.log("🤖 Bot:", res.choices[0].message.content);
}

chat();
// OPENROUTER_API_KEY=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