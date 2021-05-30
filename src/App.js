import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {Sidebar} from "./Sidebar";
import {Hero} from "./Hero";
import {Experience} from "./Experience";
import {Skills} from "./Skills";
import {Footer} from "./Footer";
import {About} from "./About";

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Footer />
        </div>
    </div>
  );
}

export default App;
