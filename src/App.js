import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Address from "./pages/Address/Address";
import NotFound from "./pages/NotFound/NotFound";
import MacBook from "./components/MacBook/MacBook";
import IphoneCatalog from "./components/IphoneCard/IphoneCatalog";
import Product from "./pages/Product/Product";
import Iphone from "./components/Iphone/Iphone";
import Watch from "./components/Watch/Watch";
import WatchCatalog from "./components/WatchCard/WatchCatalog";


function App() {
    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main text="Главная страница"/>}/>
                    <Route path="/about" element={<About text="О нас"/>}/>
                    <Route path="/product/" element={<Product/>}/>
                    <Route path="/product/macbook" element={<MacBook/>}/>
                    <Route path="/product/iphone" element={<IphoneCatalog/>}/>
                    <Route path="/product/iphone/:id" element={<Iphone/>}/>
                    <Route path="/product/watch" element={<WatchCatalog/>}/>
                    <Route path="/product/watch/:id" element={<Watch/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/address" element={<Address/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
