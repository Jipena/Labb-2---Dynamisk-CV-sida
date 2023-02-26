import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


document.addEventListener('keypress', easteregg, false);
     let text = '';
     function easteregg(event) {
      text += event.key;
      console.log(text);
      if(text === '1337'){
          alert('Något roligt meddelande');
      }
      else if(text.length > 3){
          text = '';
      }
     }

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
