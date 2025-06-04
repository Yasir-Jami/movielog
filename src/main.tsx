import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '/src/styles/index.css';
import App from './App.tsx';
import Login from './components/Login.tsx';
import Register from './components/Register.tsx';
import Header from './components/Header.tsx';
import { toast, ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/movies", element: <App />},
  {path: "/lists", element: <App />},
  {path: "/favorites", element: <App />},
  {path: "/login", element: <Login />},
  {path: "/register", element: <Register />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container">
    <Header />
      <RouterProvider router={router}/>
    </div>
    <ToastContainer/>
  </StrictMode>,
)
