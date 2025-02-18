import { FaSearch, FaHome, FaComments, FaTicketAlt } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-500 flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center">
        <div className="w-10 h-10 bg-white text-purple-600 font-bold flex items-center justify-center rounded-full">U</div>
        <div className="w-10 h-10 bg-white text-purple-600 font-bold flex items-center justify-center rounded-full">U</div>
      </div>

      {/* Welcome Message */}
      <div className="mt-6 text-center px-4">
        <h1 className="text-white text-xl font-bold">Hello User!</h1>
        <p className="text-white text-lg">How can we help?</p>
      </div>

      {/* Chat Card */}
      <div className="w-11/12 mt-4 bg-blue-900 text-white p-4 rounded-xl shadow-md">
        <p className="text-lg flex items-center">
          <span className="text-2xl mr-2">👋</span>
          Ask Anything, Get Answers in Under 2 Minutes - Instantly with vBot!
        </p>
      </div>

      {/* Start Chatting Input */}
      <div className="w-11/12 mt-4 flex items-center bg-gray-100 rounded-full p-2 shadow-md">
        <input
          type="text"
          placeholder="Start chatting..."
          className="flex-1 bg-transparent outline-none p-2"
        />
        <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
          ➝
        </button>
      </div>

      {/* Search Section */}
      <div className="w-11/12 mt-6">
        <h2 className="text-lg font-bold text-white">Search for Help?</h2>
        <div className="relative mt-2">
          <input
            type="text"
            placeholder="Search your Query"
            className="w-full p-3 rounded-lg shadow-md pr-10 outline-none"
          />
          <FaSearch className="absolute top-4 right-4 text-gray-500" />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-11/12 mt-4 bg-white p-4 rounded-xl shadow-md">
        {[
          "How does vBot work?",
          "What happens if vBot can't answer a question?",
          "Does vBot support multiple languages?",
          "Can I customize vBot for my business?",
        ].map((question, index) => (
          <div
            key={index}
            className="py-2 border-b last:border-none flex justify-between"
          >
            <span className="text-gray-800">{question}</span>
            <span>➝</span>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full bg-white p-4 flex justify-around shadow-md">
        <button className="flex flex-col items-center text-purple-600">
          <FaHome size={20} />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-500" onClick={()=>navigate("/chat")}>
          <FaComments size={20} />
          <span className="text-xs">Chats</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaTicketAlt size={20} />
          <span className="text-xs">Tickets</span>
        </button>
      </div>
    </div>
  );
}