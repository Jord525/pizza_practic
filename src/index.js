import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App'; 
//Подключаем компоненты 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
