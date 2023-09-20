import { Routes, Route } from "react-router-dom";
import "./css/index.css";
import Overview from "./pages/Overview";
import Statistics from "./pages/Statistics";
import History from "./pages/History";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
