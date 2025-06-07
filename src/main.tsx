import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '/src/styles/index.css';
import App from './App.tsx';
import Login from './components/Login.tsx';
import Register from './components/Register.tsx';
import Header from './components/Header.tsx';
import { AuthProvider } from './components/AuthContext.tsx';
import { ToastContainer } from "react-toastify";
import logger from './logger.ts';

globalThis.logger = logger;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <App />
    ),
    children: [
      { index: true, element: <App /> },
      { path: "home", element: <App /> },
      { path: "movies", element: <App /> },
      { path: "lists", element: <App /> },
      { path: "favorites", element: <App /> },
    ],
  },
  {path: "/login", element: <AuthProvider><Login /></AuthProvider>},
  {path: "/register", element: <Register />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <div className="container">
      <Header />
      <RouterProvider router={router}/>
    </div>
    <ToastContainer/>
    </AuthProvider>
  </StrictMode>,
)
