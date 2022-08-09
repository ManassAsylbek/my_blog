import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DateProductContext from "./Context/Context";

function Main() {
    const [catalog, setCatalog] = useState([])
    return (
        <React.StrictMode>
            <DateProductContext.Provider value={{catalog, setCatalog}}>
                <App/>
            </DateProductContext.Provider>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main/>
);


