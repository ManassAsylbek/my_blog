import React from 'react';
import style from "./CatalogGoods.module.css"
import {NavLink, useParams} from "react-router-dom";
import {products} from "../../Constants/Products";

const CatalogGoods = () => {
    const params = useParams();
        return (
            <div className={style.iphones}>
                {products[params.name].map(p =>
                    <div className={style.iphone}>
                        <NavLink to={`/product/${p.catalogName}/${p.id}`}><img src={p.img} alt=""/></NavLink>
                        <h5>{p.name}</h5>
                        <span>{p.price}</span>
                        <NavLink to={`/product/${p.catalogName}/${p.id}`}>выбрать</NavLink>
                    </div>)}
            </div>
        );

}

export default CatalogGoods;