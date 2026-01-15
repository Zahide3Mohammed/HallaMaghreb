import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LanguageProvider } from './element/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <LanguageProvider>
  <BrowserRouter>
    <App ></App>
  </BrowserRouter>
  </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();
