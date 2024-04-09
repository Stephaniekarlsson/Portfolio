import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Contact from "./components/Contact.jsx"
import {AnimatePresence} from "framer-motion"

function App() {
  
  return (
    <AnimatePresence>
    <BrowserRouter>
    <Header />
    <Navbar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="education" element={<Education />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    </ AnimatePresence>
  )
}

export default App
