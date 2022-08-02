import React from 'react';
import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";
import style from "../Product/Products.module.css";


const Product = () => {

    const setActive=(obj)=>(obj.isActive?`${style.active}`:"")
    return (

        <div className={style.container}>
            <ul>
                <li><NavLink className={setActive} to="/product/iphone">Iphone</NavLink></li>
                <li><NavLink className={setActive} to="/product/macbook">MacBook</NavLink></li>
                <li><NavLink className={setActive} to="/product/watch">Watch</NavLink></li>
                <li><NavLink className={setActive} to="/product/imac">iMac</NavLink></li>
                <li><NavLink className={setActive} to="/product/airpods">AirPods</NavLink></li>
            </ul>
            <div className={style.products}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Product;