import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Resume from "../src/components/Resume";
import Projects from "../src/components/Projects";
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
