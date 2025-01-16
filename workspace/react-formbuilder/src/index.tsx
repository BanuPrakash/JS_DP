import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import User from './intersection/User';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
);


