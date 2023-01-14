import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';

function App() {
  const [currentTab, handleTabChange] = useState("about");

  const renderCurrentTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Projects") {
      return <Projects />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <>
    <Header currentTab={currentTab} handleTabChange={handleTabChange}/>
    <main>
      {renderCurrentTab()}
    </main>
    <Footer/>
    </>
  );
}

export default App;
