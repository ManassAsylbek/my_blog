import React from 'react';
import style from "./About.module.css"
const About = (props) => {
    return (
        <div className={style.about}>
                <h1>{props.text}</h1>
        </div>
    );
};

export default About;