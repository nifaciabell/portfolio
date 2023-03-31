import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SEPage from "./pages/SEPage";
import UXPage from "./pages/UXPage";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/SEPage" element={<SEPage />} />

        <Route path="/UXPage" element={<UXPage />} />

        <Route path="/About" element={<About />} />

        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
