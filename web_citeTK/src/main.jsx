import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import User from './Users.jsx';
import About from './About.jsx'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',       
    element: <App />,
    errorElement: <h1>404 hahaha</h1>
  },
  {
    path: '/about',  
    element: <About/>
  },
  {
    path: '/user',
    element: <User/>
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);
