import React from "react";
import './App.css';
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import AboutCard from "./components/AboutCard";
import Posts from "./components/Posts";
import Tags from "./components/Tags";
import Footer from "./components/Footer";



function App() {
    return (
        <>
            <div className="w3-content" style={{maxWidth: 1400}}>
                <Header />
                <div className="w3-row">
                    <div className="w3-col l8 s12">
                        <BlogEntries />
                    </div>

                    <div className="w3-col l4">
                        <AboutCard/>
                        <Posts/>
                        <Tags/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;
