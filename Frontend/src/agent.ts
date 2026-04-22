import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";

// const llm = new ChatGoogleGenerativeAI({
//     model: "models/gemini-2.5-flash",
//     apiKey: process.env.API_KEY,
// })

export const llm = new ChatMistralAI({
  apiKey: process.env.API_KEY,
  temperature: 0.1,
});

export default llm;