import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/purpose/NavBar";
import AboutProjectPage from "./pages/AboutProjectPage";
import MainPage from "./pages/MainPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects/:projectname" element={<AboutProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
