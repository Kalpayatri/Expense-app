import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/configureStore';
const store=configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>

    </Provider>
);


