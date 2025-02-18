import { useState } from "react";
import { sendMessageToChatGPT } from "./chatService";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    const botReply = await sendMessageToChatGPT(input);
    setMessages([...messages, userMessage, { role: "assistant", content: botReply }]);

    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>What can I help with?</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "user-msg" : "bot-msg"}>{msg.content}</p>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Start chatting..." />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatScreen;