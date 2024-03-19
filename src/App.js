import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import AboutMe from "./Pages/Home/AboutMe";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import ContactMe from "./Pages/Home/ContactMe";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
            <Route path="/About-me" element={<AboutMe />}></Route>
            <Route path="/portfolio" element={<MyPortfolio />}></Route>
            <Route path="/contact" element={<ContactMe />}></Route>
          </Routes> 
        </div>
      </Router>
    </div>
  );
}

export default App;
