import { Route, Routes,  BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter basename="/portfolioV1">
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/projects" element={<Projects/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
