import React from 'react';
import style from "./IphoneCatalog.module.css"
import {iphones} from "../../Constants/iphone"
import {NavLink} from "react-router-dom";

const IphoneCatalog = () => {

    return (
        <div className={style.iphones}>
            {iphones.map(p =>
                <div className={style.iphone}>
                    <NavLink to={`/product/iphones/${p.id}`}><img src={p.img} alt=""/></NavLink>
                    <h5>{p.name}</h5>
                    <span>{p.price}</span>
                    <NavLink to={`/product/iphones/${p.id}`}>выбрать</NavLink>
                </div>)}
        </div>
    );
};

export default IphoneCatalog;