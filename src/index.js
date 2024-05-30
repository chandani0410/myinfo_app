import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Information from './components/info';
import About from './components/about'
import Socials from './components/social'
import Interest from './components/interest'
reportWebVitals();


function My_info(){
  return (
    <div>
      <Information />
      <About />
      <Interest />
      <Socials />
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<My_info />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

