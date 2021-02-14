import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/state";

export let renderEntereTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntereTree();

store.subscribe(renderEntereTree);


// serviceWorker.unregister();

