import React from 'react';
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import style from ".//Products.module.css";


const Catalog = () => {
    return (
        <div className={style.header}>
            <h1>Catalog</h1>
            <ul>

                <li><Link to="/product/iphone-13">Iphone 13</Link></li>
                <li><Link to="/product/iphone-12">Iphone 12</Link></li>
                <li><Link to="/product/iphone-11">Iphone 11</Link></li>
                <li><Link to="/product/iphone-r">Iphone r</Link></li>
                <li><Link to="/iphone">Iphone</Link></li>
                <li><Link to="/macbook">MacBook</Link></li>
                <div className={style.products}>
                    <Outlet/>
                </div>

            </ul>
            <Outlet/>
        </div>
    );
};

export default Catalog;