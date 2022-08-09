import React, {useEffect, useState} from 'react';
import toast from 'react-hot-toast'
import {NavLink} from "react-router-dom";
import style from "../Product/Products.module.css";

const Product = (props) => {

    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/goodsCatolog")
            .then(response => {
                if(response.status===200){
                    return response.json()
                } else {
                    toast.error("Error. Status: "+ response.status)
                }
            })
            .then(data => setCatalog(data))
    },[])

    const setActive = (obj) => (obj.isActive ? `${style.active}` : "")
    return (
        <div className={style.container}>
            <ul>
                {catalog.map(item =>
                    <li key={item.id}>
                        <NavLink className={setActive}  to={`/product/${item.name}`}>
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