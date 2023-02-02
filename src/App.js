import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Work from "./pages/Work"
import FourOFour from "./pages/404"

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/work" element={<Work/>} />
            <Route path="*" element={<FourOFour/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
