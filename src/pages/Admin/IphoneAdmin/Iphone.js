import React, {useEffect, useState} from 'react';
import style from './Iphone.module.css'
import {toast} from "react-hot-toast";
import {Link} from "react-router-dom";

const Iphone = () => {

    const [goods, setGoods] = useState([]);

    const deleteGoods = (id) => {
        const url = 'http://localhost:3002/iphones/'+id;
        const options={
            method:'DELETE'
        }
        fetch(url,options)
            .then(response => {
                if (response.ok) {
                    toast.success("Товар успешно DELETE")
                    getGoods();
                } else {
                    toast.error("Что=то произошло.Cтатус ошибки:" + response.status)
                }
            })
    }
    const getGoods = () => {
        const url = 'http://localhost:3002/iphones';
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
        <div className={style.iphone}>
            <table>
                <tr>
                    <th>Изображение</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Действия</th>
                </tr>
                {
                    goods.map(item => {
                        return (
                            <tr>
                                <td><img src={item.img} alt=""/></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => deleteGoods(item.id)}>удалить</button>
                                    <Link to={`/admin/update-product/${item.id}`}><button>Редактировать</button></Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
};

export default Iphone;