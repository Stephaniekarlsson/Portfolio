import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header"
import Navbar from "./Navbar"
import Home from "./Home";
import About from "./About";
import Education from "./Education.jsx"
import Portfolio from "./Portfolio.jsx"
import Contact from "./Contact.jsx"
function App() {
  
  return (
    <>
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
    </>
  )
}

export default App
