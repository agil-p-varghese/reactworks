import { useState } from "react";
import { sendMessageToChatGPT } from "./chatService";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput(""); // Clear input immediately for better UX

    const botReply = await sendMessageToChatGPT(input);
    const botMessage = { role: "assistant", content: botReply };

    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <div className="chat-container">
      <h2>What can I help with?</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "user-msg" : "bot-msg"}>{msg.content}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start chatting..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatScreen;
