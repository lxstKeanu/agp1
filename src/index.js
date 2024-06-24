import React, { Suspense } from 'react';
import { createRoot } from "react-dom/client"
import { Provider } from 'react-redux';
import { store } from "./store/store";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './i18n'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Suspense fallback="...">
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);


reportWebVitals();
