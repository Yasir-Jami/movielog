import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from "./Layout.tsx"
import { AuthProvider } from './components/AuthContext.tsx';
import { ToastContainer } from "react-toastify";
import logger from './logger.ts';

globalThis.logger = logger;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={AppRoutes}/>
    <ToastContainer/>
    </AuthProvider>
  </StrictMode>,
)
