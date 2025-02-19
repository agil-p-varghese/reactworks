import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY; 

export const sendMessageToChatGPT = async (message) => {
  let retries = 2;
  
  while (retries > 0) {
    try {
      const response = await axios.post(
        API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      if (error.response?.status === 429) {
        console.warn("Rate limit exceeded. Retrying in 2 seconds...");
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } else {
        console.error("Error calling ChatGPT API:", error);
        return "Sorry, I couldn't process that.";
      }
    }
    retries--;
  }
};
