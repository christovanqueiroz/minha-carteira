import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import SingIn from './pages/SignIn';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Dashboard />
    <List />
    <SingIn />

  </React.StrictMode>
);