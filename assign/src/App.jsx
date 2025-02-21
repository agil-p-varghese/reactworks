import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Gemini from "./Gemini";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<Gemini />} />
    </Routes>
  );
}

export default App;