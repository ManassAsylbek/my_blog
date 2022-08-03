import React from 'react';
import style from "./WatchCatalog.module.css"
import {watch} from "../../Constants/Watch"
import {NavLink} from "react-router-dom";

const WatchCatalog = () => {

    return (
        <div className={style.iphones}>
            {watch.map(p =>
                <div className={style.iphone}>
                    <NavLink to={`/product/watch/${p.id}`}><img src={p.img} alt=""/></NavLink>
                    <h5>{p.name}</h5>
                    <span>{p.price}</span>
                    <NavLink to={`/product/watch/${p.id}`}>выбрать</NavLink>
                </div>)}
        </div>
    );
};

export default WatchCatalog;