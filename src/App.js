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
import AddProducts from "./pages/Admin/AddProduct/AddProducts";
import Iphone from "./pages/Admin/IphoneAdmin/Iphone";
import UpdateProduct from "./pages/Admin/UpdateProduct/UpdateProduct";

let dateAll;


function App() {


    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main text="Главная страница"/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/product/" element={<Product/>}/>
                    <Route path="/product/:name/" element={<CatalogGoods/>}/>
                    <Route path="/product/:name/:id" element={<Goods  dateAll={dateAll}/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/address" element={<Address/>}/>
                    <Route path="/admin/add-products" element={<AddProducts/>}/>
                    <Route path="/admin/iphone" element={<Iphone/>}/>
                    <Route path="/admin/update-product/:id" element={<UpdateProduct/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Toaster/>
            </BrowserRouter>
    );
}

export default App;
