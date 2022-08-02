import React from 'react';
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    const setActive=(obj)=>obj.isActive?"active":""

    return (
        <div className={style.header}>
            <ul>
                <li><NavLink className={setActive} to="/">Главная</NavLink></li>
                <li><NavLink className={setActive} to="/about">О нас</NavLink></li>
               {/* <li><NavLink className={setActive} to="/catalog">Catalog</NavLink></li>*/}
                <li><NavLink className={setActive} to="/product">Product</NavLink></li>
                <li><NavLink className={setActive} to="/contacts">Контакты</NavLink></li>
                <li><NavLink className={setActive} to="/address">Address</NavLink></li>

            </ul>
        </div>
    );
};

export default Header;