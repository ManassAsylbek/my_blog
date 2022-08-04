import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Address from "./pages/Address/Address";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";

import Goods from "./components/Watch/Goods";
import CatalogGoods from "./components/WatchCard/CatalogGoods";


function App() {
    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main text="Главная страница"/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/product/" element={<Product/>}/>
                    <Route path="/product/:name/" element={<CatalogGoods/>}/>
                    <Route path="/product/:name/:id" element={<Goods/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/address" element={<Address/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
