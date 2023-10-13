import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar  from "./components/NavBar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {useNavigate} from "react-router-dom";
import React, {startTransition} from "react";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Projects />
            <Contact />
            <Footer />
            {/*<Restaurant1 />*/}
        </div>
    );
}

export default App;