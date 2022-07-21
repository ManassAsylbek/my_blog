import React from 'react';
import {tags} from './Constants/indexs'

const margin = {
    marginRight: "5px"
}

const Tags = () => {
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
                <p>
                    {tags.map(item => (
                            <span
                                className="w3-tag w3-light-grey w3-small w3-margin-bottom"
                                style={margin}>
                        {item}
                    </span>))
                    }
                </p>
            </div>
        </div>
    );
};

export default Tags;