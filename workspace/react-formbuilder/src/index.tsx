import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import User from './intersection/User';
import UserIntersection from './intersection/UserIntersection';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserIntersection />
  </React.StrictMode>
);


