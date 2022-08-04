import React from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import style from "../Iphone/Iphone.module.css";
import {products} from "../../Constants/Products";

const Goods = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams()
    const product = products[params.name].find(item => item.id === +params.id)
    return (
        <div className={style.iphone}>
            <div>
                <img src={product.img} alt=""/>
            </div>
            <div><h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
                <p className={style.quantityStatus}>
                    {+searchParams.get('quantity') === 0 ? 'нет в наличии' : 'товар в наличии'}
                </p>
            </div>
        </div>
    );
};
export default Goods;