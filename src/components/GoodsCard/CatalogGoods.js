import React, {useEffect, useState, useContext} from 'react';
import toast from 'react-hot-toast'
import style from "./CatalogGoods.module.css"
import {NavLink, useParams} from "react-router-dom";
import DateProductContext from "../../Context/Context";

const CatalogGoods = (props) => {

    const {catalog, setCatalog} = useContext(DateProductContext)
    const params = useParams();


    useEffect(() => {
        fetch(`http://localhost:3001/${params.name}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    toast.error("Error. Status: "+ response.status)
                }
            })
            .then(data => setCatalog(data) && props.dateGoods(data))
    }, [])


    return (
        <div className={style.iphones}>
            {catalog.map(p =>
                <div className={style.iphone} key={p.id}>
                    <NavLink to={`/product/${p.catalogName}/${p.id}`} ><img src={p.img} alt=""/></NavLink>
                    <h5>{p.name}</h5>
                    <span>{p.price}</span>
                    <NavLink to={`/product/${p.catalogName}/${p.id}`}>выбрать</NavLink>
                </div>)}
        </div>
    );

}

export default CatalogGoods;