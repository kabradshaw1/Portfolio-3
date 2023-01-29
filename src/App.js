import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  const [currentTab, handleTabChange] = useState("about");

  const renderCurrentTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Projects") {
      return <Projects />;
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
