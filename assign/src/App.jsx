import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatScreen />} />
    </Routes>
  );
}

export default App;