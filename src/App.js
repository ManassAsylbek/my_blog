import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast"

import './App.css';
import Header from "./components/Header/Header"
import Main from "./pages/main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Address from "./pages/Address/Address";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";
import Goods from "./components/Watch/Goods";
import CatalogGoods from "./components/GoodsCard/CatalogGoods";
import Products from "./pages/Admin/Product/Products";

let dateAll;


function App() {

    const dateGoods=(product)=> {
        dateAll=product
    }
    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main text="Главная страница"/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/product/" element={<Product/>}/>
                    <Route path="/product/:name/" element={<CatalogGoods dateGoods={dateGoods}/>}/>
                    <Route path="/product/:name/:id" element={<Goods  dateAll={dateAll}/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/address" element={<Address/>}/>
                    <Route path="/admin/add-products" element={<Products/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Toaster/>
            </BrowserRouter>
    );
}

export default App;
