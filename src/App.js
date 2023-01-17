import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Learnings from "./pages/Learnings";
import FourOFour from "./pages/404";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="learnings" element={<Learnings/>} />
            <Route path="*" element={<FourOFour/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
