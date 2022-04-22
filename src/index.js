import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { createAppAsyncStore } from './store/config/storeConfig';
import { Provider } from 'react-redux';
import AppRedux from './AppRedux.js';
import { createAppStores } from './ejercicios-22-23-24/configurar/storeConfig';


//let appStore = createAppStore()
let appStore = createAppStores

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <AppRedux></AppRedux>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
