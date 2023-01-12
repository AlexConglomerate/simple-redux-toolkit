import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {Provider} from "react-redux";
import {createStore} from "./store/createStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        {/*// в компоненты ниже прокидываем состояние*/}
        <Provider store={createStore()}>
            <App/>
        </Provider>
    </React.StrictMode>
)