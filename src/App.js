import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import './App.css';

function App() {
  const [currentTab, handleTabChange] = useState("about");
  return (
    <>
    <Header currentTab={currentTab} handleTabChange={handleTabChange}/>
    <Footer/>
    </>
  );
}

export default App;
