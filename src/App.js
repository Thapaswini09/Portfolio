import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
