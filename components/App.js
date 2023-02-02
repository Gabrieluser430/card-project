import Info from "./Info.js"
import About from "./About.js"
import Interests from "./Interests.js"
import Footer from "./Footer.js"
import React from "react"
import ReactDOM from "react-dom"

export default function App() {
    return (
        <div className="app-div">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}