import React from "react";
import Navbar from "./components/navbar/Navbar";
import ReoutesPages from "./Routes/routes";
import "./App.style.css";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <ReoutesPages />
            <Footer />
        </>
    );
}

export default App;
