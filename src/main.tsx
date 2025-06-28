import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '/src/styles/index.css';
import Layout from "./Layout"
import App from './App.tsx';
import Login from './components/Login.tsx';
import Register from './components/Register.tsx';
import { AuthProvider } from './components/AuthContext.tsx';
import { ToastContainer } from "react-toastify";
import logger from './logger.ts';

globalThis.logger = logger;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <App />},
      { path: "home", element: <App />},
      { path: "movies", element: <App />},
      { path: "lists", element: <App />},
      { path: "favorites", element: <App />},
      { path: "login", element: <Login />},
      { path: "register", element: <Register />},
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    
      <RouterProvider router={router}/>
    
    <ToastContainer/>
    </AuthProvider>
  </StrictMode>,
)
