import { useState } from "react";
import { FiPaperclip } from "react-icons/fi"; // For attachment icon
import { IoSend } from "react-icons/io5"; // For send icon
import { AiOutlineHome, AiOutlineMessage, AiOutlineFileText } from "react-icons/ai"; // Bottom icons

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Load from .env
import {useNavigate} from "react-router-dom";

const Gemini = () => {
  const navigate=useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessageToGemini = async (message) => {
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] }),
        }
      );

      const data = await response.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "Error fetching response.";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botReply = await sendMessageToGemini(input);
    const botMessage = { role: "bot", content: botReply };

    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6 rounded-b-3xl">
        <h2 className="text-2xl font-bold">What can I help with?</h2>
        <p className="text-sm text-white/80">Your AI-Powered Support Assistant</p>
      </div>

      {/* Chat Box */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <p
              className={`p-3 text-white rounded-xl max-w-xs ${
                msg.role === "user"
                  ? "bg-gray-500 text-white rounded-br-none"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 rounded-bl-none"
              }`}
            >
              {msg.content}
            </p>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      {/* Input Bar */}
<div className="sticky bottom-16 left-0 right-0 bg-white shadow-md flex items-center px-4 py-3">
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Start chatting..."
    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <FiPaperclip className="text-gray-500 mx-3 cursor-pointer" size={20} />
  <button
    onClick={handleSendMessage}
    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
  >
    <IoSend size={20} />
  </button>
</div>


      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 w-full bg-white shadow-lg flex justify-around py-3 rounded-t-3xl">
        <div className="flex flex-col items-center text-gray-500">
          <button on onClick={()=>navigate("/")}>
          <AiOutlineHome size={24} />
          <span className="text-xs">Home</span></button>
        </div>
        
      </div>
      {/* */}
    </div>
  );
};

export default Gemini;
