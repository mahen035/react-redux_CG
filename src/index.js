import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { createStore } from 'redux';
import CounterReducer from './reducers/CounterReducer';
import ColorReducer from './reducers/ColorReducer';
import store from './app/store';
import { Provider } from 'react-redux';
import Posts from './components/Posts';

//const store = createStore(CounterReducer);
//const store = createStore(ColorReducer);
console.log('CREATING THE STORE..')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    {/* <Posts /> */}
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
