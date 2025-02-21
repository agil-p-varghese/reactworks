const express = require("express");
const cors = require("cors");
{/*require("dotenv").config();*/}
require("dotenv").config({ path: __dirname + "/.env" });
{/*console.log("API Key:", process.env.GEMINI_API_KEY); // Debugging

console.log("API Key:", process.env.GEMINI_API_KEY);*/}

const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY; // Secure API key


app.get("/", (req, res) => res.send("Server is running!"));

// API Route to Handle Chatbot Requests
app.post("/api/chatbot", async (req, res) => {
  console.log("received request:",req.body);
  try {
    const { message } = req.body;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,

      {
        contents: [{ parts: [{ text: message }] }],
      },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("Gemini API response:", response.data);


    const botReply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";

    res.json({ reply: botReply });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Failed to fetch response from Gemini." });
  }
});
{/*app.post("/api/chatbot", (req, res) => {
  res.json({ reply: "Test response from the server." });
});*/}


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});