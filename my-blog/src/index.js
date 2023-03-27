import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAe0OMGTSJKT8ig113-epQo1RTT4yZ3EqM",
  authDomain: "my-react-blog-beda3.firebaseapp.com",
  projectId: "my-react-blog-beda3",
  storageBucket: "my-react-blog-beda3.appspot.com",
  messagingSenderId: "540224007405",
  appId: "1:540224007405:web:4ea8df4b7bb35faed6b0e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
