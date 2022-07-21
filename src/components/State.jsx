import React, {useState} from 'react';

const State = () => {
    const [text, setText] = useState("No click")

    const change = () =>{
        if(text==="click"){
            setText("No click")
        }
        if (text==="No click"){
            setText("click")
        }
    }

    return (
        <div className="w3-card-4 w3-margin w3-white">
            <button onClick={() =>
                change(text)}>Click me</button>
            <p>{text}</p>
        </div>
    );
};

export default State;