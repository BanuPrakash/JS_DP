import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import CommandApp from './command/CommandApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CommandApp />
  </React.StrictMode>
);


