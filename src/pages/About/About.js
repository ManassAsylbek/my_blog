import React, {useEffect, useState} from 'react';
import style from "./About.module.css"

const About = (props) => {

    const [count, setCount] = useState(0)
    const [age, setAge] = useState(20)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                if(response.status===200){
                    return response.json()
                } else {
                    alert("Error. Status: "+ response.status)
                }
            })
            .then(data => setUsers(data))
    },[])
    return (
        <div className={style.about}>
            <h1>Страничка о нас</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>clickME
            </button>
            <button onClick={() => {
                setAge(age + 1)
            }}>change age
            </button>
            <h2>{count}</h2>
            <h2>{age}</h2>
            <ul>
                {users.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    );
};

export default About;