import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div className="flex flex-col gap-[20px]">
            <NavBar />
            <Hero />
            <Contact />
        </div>
    );
};

export default App;
