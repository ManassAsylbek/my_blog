import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Address from "./pages/Address/Address";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";
import MacBook from "./components/MacBook/MacBook";
import Iphone from "./components/Iphone/Iphone";


function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main text="Главная страница"/>}/>
                    <Route path="/about" element={<About text="О нас"/>}/>
                    <Route path="/products" element={<Products/>}>
                        <Route path="iphone" element={<Iphone/>}/>  {/*ДОЧЕРНИЙ РОУТ*/}
                        <Route path="macbook" element={<MacBook/>}/>{/*ДОЧЕРНИЙ РОУТ*/}
                    </Route>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/address" element={<Address/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
