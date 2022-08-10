import React from 'react';

import s from "./UpdateProduct.module.css";

const UpdateProduct = () => {
    return (
        <div className={s.container}>
            <h1>Добовление товаров</h1>
            <form className={s.classForm} action="javascript:void (0)">
                <div>
                    <label htmlFor="name">НАЗВАНИЕ</label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="imgUrl">Адрес изоброжение</label>
                    <input type="text" id="imgUrl" />
                </div>
                <div>
                    <label htmlFor="price">цена</label>
                    <input type="number" id="price"/>
                </div>
                <div>
                    <label htmlFor="desc">Описания</label>
                    <textarea id="desc" />
                </div>
                <div>
                    <label htmlFor="category">Категория</label>
                    <select id="category">
                        <option value="0">выберите</option>
                        <option value="1">iphone</option>
                        <option value="2">watches</option>
                    </select>
                </div>
                <div>
                    <button >Добавить</button>
                </div>

            </form>
        </div>
    );
};

export default UpdateProduct;