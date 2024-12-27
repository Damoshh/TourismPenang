import React, {useEffect, useState} from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Event";
import Place from "./pages/Place/Place";
import About from "./pages/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

    const current_theme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState (current_theme ? current_theme : 'light');

    useEffect(()=>{
        localStorage.setItem('current_theme', theme);
        }, [theme])

    return(
        <div  className={`App ${theme}`}>
        <Router>
            <Navbar theme={theme} setTheme={setTheme} />
            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/event" element = {<Event/>} />
                <Route path="/place" element = {<Place/>} />
                <Route path="/about" element = {<About/>} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;