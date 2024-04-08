import { Route, Routes,  HashRouter } from "react-router-dom";
import Home from './components/Home'
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/asset/Navbar";

function App() {
  return (
    <HashRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/projects" element={<Projects/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
    </Routes>
    </HashRouter>
  );
}

export default App;
