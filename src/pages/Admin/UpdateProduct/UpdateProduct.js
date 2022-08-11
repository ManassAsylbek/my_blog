import React, {useEffect, useState} from 'react';

import s from "./UpdateProduct.module.css";
import {toast} from "react-hot-toast";
import {useParams} from "react-router-dom";
import {getValue} from "@testing-library/user-event/dist/utils";

const UpdateProduct = () => {

    const params = useParams();
    const [goods, setGoods] = useState([]);


    const getValue = (e) => {
        if (e.currentTarget.id === "name") {
            setName(e.currentTarget.value)
        }
        if (e.currentTarget.id === "imgUrl") {
            setImgUrl(e.currentTarget.value)
        }
        if (e.currentTarget.id === "price") {
            setPrice(e.currentTarget.value+" сом")
        }
        if (e.currentTarget.id === "desc") {
            setDesc(e.currentTarget.value)
        }
        if (e.currentTarget.id === "category") {
            setCategory(e.currentTarget.value)
        }
    }


    const updateProduct = (e) => {
        const data = {
            name: e.currentTarget.name.value,
            price: e.currentTarget.price.value,
            img: e.currentTarget.imgUrl.value,
            description: e.currentTarget.desc.value,
        }

        const option = {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const url = `http://localhost:3002/iphones/` + params.id;
        fetch(url, option)
            .then(response =>{
                if(response.ok===true){
                    toast.success("Товар успешно редактирован")
                }else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
    }
    const getGoods = () => {
        const url = `http://localhost:3002/iphones/`+params.id;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    toast.error("Что=то произошло.Cтатус ошибки:" + response.status)
                }
            })
            .then(data => setGoods(data))
    }

    useEffect(getGoods, [])

    return (
        <div className={s.container}>
            <h1>Дабавление товаров</h1>
            <form onSubmit={updateProduct} className={s.classForm} action="javascript:void (0)">
                <div>
                    <label htmlFor="name">НАЗВАНИЕ</label>
                    <input type="text" name="name" defaultValue={goods.name} />
                </div>
                <div>
                    <label htmlFor="imgUrl">Адрес изоброжение</label>
                    <input type="text" name="imgUrl" defaultValue={goods.img}/>
                </div>
                <div>
                    <label htmlFor="price">цена</label>
                    <input type="number" name="price" defaultValue={goods.price}/>
                </div>
                <div>
                    <label htmlFor="desc">Описания</label>
                    <textarea name="desc"  defaultValue={goods.description} />
                </div>
                <div>
                    <label htmlFor="category">Категория</label>
                    <select id="category"  defaultChecked={goods.catalogName}>
                      {/*  <option value={() => goods.catalogName?goods.catalogName:"0"}>{goods.catalogName}</option>*/}
                        <option value="1">iphones</option>
                        <option value="2">watches</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Добавить</button>
                </div>

            </form>
        </div>
    );
};

export default UpdateProduct;