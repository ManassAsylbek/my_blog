import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import style from "../Product/Products.module.css";
import {products} from "../../Constants/Products"

const Product = () => {

    const setActive = (obj) => (obj.isActive ? `${style.active}` : "")
    return (
        <div className={style.container}>
            <ul>
                {products.goodsCatolog.map(item =>
                    <li>
                        <NavLink className={setActive} to={`/product/${item.name}`}>
                            <img src={item.img} alt=""/>
                            <span>{item.name}</span>
                        </NavLink>
                    </li>)
                }
            </ul>
            <div className={style.products}>
            </div>
        </div>
    );
};
export default Product;