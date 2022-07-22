import React, {useState} from 'react';
import {tags} from './Constants'

const margin = {
    marginRight: "5px",
    cursor:"pointer"
}


const Tag = (props) => {
    const [text, setText] = useState("w3-tag w3-light-grey w3-small w3-margin-bottom")

    const onChange = () => {
        if (text === "w3-tag w3-light-grey w3-small w3-margin-bottom") {
            setText("w3-tag w3-black w3-margin-bottom")
        }
        if (text === "w3-tag w3-black w3-margin-bottom") {
            setText("w3-tag w3-light-grey w3-small w3-margin-bottom")
        }
    }
    return (
        <span onClick={onChange}
              className={text}
              style={margin}>
                        {props.name}
                    </span>
    )

}

const Tags = () => {
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
                <p>
                    {
                        tags.map(item => <Tag  name={item}/>)
                    }
                </p>
            </div>
        </div>
    );
};

export default Tags;