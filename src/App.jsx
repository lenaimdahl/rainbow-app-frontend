import { Routes, Route } from "react-router-dom";
import "./css/index.css";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Statistics from "./pages/Statistics";
import History from "./pages/History";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
