import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/secondstore';
import { createStore } from 'redux'
import allReducers from './app/reducers'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

export let myStore = createStore(allReducers)

console.log(myStore.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
