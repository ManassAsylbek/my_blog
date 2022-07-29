import React from 'react';
import style from "./Main.module.css"

const Main = (props) => {
    return (
        <div className={style.main}>
            <h1>{props.text}</h1>
        </div>
    );
};

export default Main;