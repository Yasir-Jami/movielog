// Main App layout
import { createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorFallback from "./ErrorFallback.tsx";
import Home from './components/pages/Home.tsx';
import Login from './components/pages/Login.tsx';
import Register from './components/pages/Register.tsx';

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorFallback />,
    children: [
      { index: true, element: <Home />},
      { path: "home", element: <Home />},
      { path: "movies", element: <Home />},
      { path: "login", element: <Login />},
      { path: "register", element: <Register />},
    ],
  }
]);

export default AppRoutes;