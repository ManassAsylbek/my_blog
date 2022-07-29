import React from 'react';
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import style from "../../pages/Products/Products.module.css";


const Products = () => {
    return (
        <div className={style.header}>
            <h1 >Католог</h1>
            <ul>
                <li><Link to="iphone">Iphone</Link></li>
                <li><Link to="macbook">MacBook</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Products;