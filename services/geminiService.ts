
import { GoogleGenAI } from "@google/genai";

export const getAIResponse = async (userMessage: string, language: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User Language: ${language}. Context: You are a professional export assistant for "Onions Business" (onions.business), a Korean agency for used tires, cars, and machinery. The CEO is Onion, a former Air Force Captain known for integrity. Be helpful, professional, and encourage the user to provide item details, quantity, and destination for a quote. User said: ${userMessage}`,
      config: {
        systemInstruction: "You are an expert global logistics assistant. Provide concise, helpful answers in the user's language.",
        temperature: 0.7,
      },
    });
    return response.text || "I apologize, I am unable to process that at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI assistant. Please try again or contact us directly.";
  }
};
