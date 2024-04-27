import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProviders from './providers/AuthProviders.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
