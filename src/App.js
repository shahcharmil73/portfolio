import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import AboutMe from "./Pages/Home/AboutMe";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import ContactMe from "./Pages/Home/ContactMe";
import { initializeApp } from "firebase/app";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDtMYnYFGYyZ3AivXVuV_8HSPPE_IwzsSc",
    authDomain: "fir-portfolio-ffec3.firebaseapp.com",
    projectId: "fir-portfolio-ffec3",
    storageBucket: "fir-portfolio-ffec3.appspot.com",
    messagingSenderId: "290007192783",
    appId: "1:290007192783:web:678439aa45897dcc8c13ba"
  };

  return (
    <div className="App" id="App">
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
