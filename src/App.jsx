import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0e0c1e]">
      <Navbar />
      <Hero />
      <Projects/>
      <Contact/>
    </div>
      
    
  );
}
 
export default App;
