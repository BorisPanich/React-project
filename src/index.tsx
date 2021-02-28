import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

// export let renderEntereTree = () => {
ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root'));
// }
// renderEntereTree();
// store.subscribe(() => {
//     renderEntereTree()
// })

// serviceWorker.unregister();

// yarn add react-redux
// yarn add @types/react-redux

