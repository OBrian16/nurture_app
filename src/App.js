import React from 'react';
import logo from './img/logo512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Nurture Program. Click the link below to chat with us.
        </p>
        <a
          className="App-link"
          href="https://wa.me/message/NDOWCMUL6IVUN1"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Link
        </a>
      </header>
    </div>
  );
}

export default App;
