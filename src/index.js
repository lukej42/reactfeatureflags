import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FlagsProvider } from 'react-feature-flags';

const flags = [
  { name: 'vipOnly', isActive: false },
  { name: 'adminOnly', isActive: true },
  { name: 'customerOnly', isActive: false },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlagsProvider value={flags}>
    <App />
    </FlagsProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
