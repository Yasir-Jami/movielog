// Main App layout
import { createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorFallback from "./ErrorFallback.tsx";
import Home from './components/pages/Home.tsx';
import Login from './components/pages/Login.tsx';
import Register from './components/pages/Register.tsx';
import Favorites from '@components/ui/Favorites.tsx';

const Layout = () => {
  return (
    <>
    <main className="main-content">
      <Outlet />
    </main>
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
      { path: "favorites", element: <Favorites />},
      { path: "login", element: <Login />},
      { path: "register", element: <Register />},
    ],
  }
]);

export default AppRoutes;