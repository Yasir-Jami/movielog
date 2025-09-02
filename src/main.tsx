import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from "./Layout.tsx"
import { AuthProvider } from './components/contexts/AuthContext.tsx';
import { ToastContainer, Slide } from "react-toastify";
import logger from './logger.ts';

globalThis.logger = logger;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={AppRoutes}/>
    <ToastContainer
      theme="colored"           // Default theme (light, dark, colored)
      transition={Slide}        // Default transition
      autoClose={3000}          // Default auto-close duration
      hideProgressBar={true}    // Show/hide progress bar
      position="bottom-center"  // Default toast position
      newestOnTop={true}        // Place newest toasts on top
      closeOnClick={true}       // Close toast on click
      rtl={false}               // Enable/disable right-to-left layout
      pauseOnFocusLoss={false}  // Pause auto-close when window loses focus
      draggable={true}          // Allow dragging toasts
      pauseOnHover={true}       // Pause auto-close on hover
    />
    </AuthProvider>
  </StrictMode>,
)
