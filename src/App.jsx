import React from "react";
import Header from "./Components/Header";
import Skills from "./Components/Skills and Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css"

function App() {
  return (
       <div className="main-container">
          <Header/>
          <Skills />
          <Contact/>
          <Footer />
       </div>
  )
}

export default App;