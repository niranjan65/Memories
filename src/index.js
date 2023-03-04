import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.js';
import {Provider} from 'react-redux';
import store from './store/store.js';
import './index.css'



ReactDom.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <App />
    </Provider>
  
)