import React from 'react';
import style from "./Header.module.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.header}>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/products">products</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
                <li><Link to="/address">Address</Link></li>

            </ul>
        </div>
    );
};

export default Header;