import React from 'react';
import {iphones} from "../../Constants/iphone";
import {useParams,useSearchParams} from "react-router-dom";
import style from './Iphone.module.css'

const Iphone = () => {
    const params = useParams();
    const [searchParams,setSearchParams] = useSearchParams()

    const product = iphones.find(item => item.id === +params.id)
    return (
        <div className={style.iphone}>
            <div>
                <img src={product.img} alt=""/>
            </div>
            <div><h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
                <p className={style.quantityStatus}>
                    {+searchParams.get('quantity')===0 ? 'нет в наличии': 'товар в наличии'}
                </p>
            </div>
        </div>
    );
};

export default Iphone;