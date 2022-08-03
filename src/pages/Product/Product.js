import React from 'react';
import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";
import style from "../Product/Products.module.css";


const Product = () => {

    const setActive = (obj) => (obj.isActive ? `${style.active}` : "")
    return (

        <div className={style.container}>
            <ul>
                <li>
                    <NavLink className={setActive} to="/product/iphone">
                        <img src="https://www.istore.kg/media/category/iphones.webp" alt=""/>
                        <span>Iphone</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={setActive} to="/product/macbook">
                        <img src="https://www.istore.kg/media/category/macs_GvfhGiG.webp" alt=""/>
                        <span>MacBook</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={setActive} to="/product/watch">
                        <img src="https://www.istore.kg/media/category/watches.webp" alt=""/>
                        <span>Watch</span>
                    </NavLink>
                </li>
            </ul>
            <div className={style.products}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Product;