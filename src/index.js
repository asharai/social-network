import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from "redux";
import {Provider} from 'react-redux';
import postReducer from "./store/reducers/Posts";
import reducer from "./store/reducers/index";
import thunk  from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
store.getState()
const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </Provider>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
