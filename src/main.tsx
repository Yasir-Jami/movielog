import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '/src/styles/index.css';
import App from './App.tsx';
import Header from './components/Header.tsx';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/movies", element: <App />},
  {path: "/lists", element: <App />},
  {path: "/favorites", element: <App />},
  {path: "/register", element: <App />},
  {path: "/login", element: <App />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router}/>
  </StrictMode>,
)
