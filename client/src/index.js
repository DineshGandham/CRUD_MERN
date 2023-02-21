import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ContextProvider from './component/context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter> 
  </ContextProvider>
);


