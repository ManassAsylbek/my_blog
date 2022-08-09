import React, {useState} from 'react';
import s from './Products.module.css'

const Products = () => {
    const [name,setName] = useState(null)
    const [imgUrl,setImgUrl] = useState(null)
    const [price,setPrice] = useState(null)
    const [desc,setDesc] = useState(null)
    const [category,setcategory] = useState(null)

    const getValue= (e) =>{
        if(e.currentTarget.id==="name"){
            setName(e.currentTarget.value)
        }if(e.currentTarget.id==="imgUrl"){
            setImgUrl(e.currentTarget.value)
        }if(e.currentTarget.id==="price"){
            setPrice(e.currentTarget.value)
        }if(e.currentTarget.id==="desc"){
            setDesc(e.currentTarget.value)
        }if(e.currentTarget.id==="category"){
            setcategory(e.currentTarget.value)
        }

    }

    return (
        <div className={s.container}>
            <h1>Добовление товаров</h1>
            <form className={s.classForm} action="javascript:void (0)">
                <div>
                    <label htmlFor="name">НАЗВАНИЕ</label>
                    <input type="text" id="name" onChange={getValue}/>
                </div>
                <div>
                    <label htmlFor="imgUrl">Адрес изоброжение</label>
                    <input type="text" id="img_url"/>
                </div>
                <div>
                    <label htmlFor="price">цена</label>
                    <input type="number" id="price"/>
                </div>
                <div>
                    <label htmlFor="desc">Описания</label>
                    <textarea id="desc"/>
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
                    <button type="submit">Добавить</button>
                </div>

            </form>
        </div>
    );
};

export default Products;