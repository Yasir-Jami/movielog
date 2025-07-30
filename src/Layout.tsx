// Main App layout
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from '@components/ui/Header';
import ErrorFallback from "./ErrorFallback.tsx";
import App from './App.tsx';
import Cookie from "@components/Cookie.tsx";
import Login from './components/ui/Login.tsx';
import Register from './components/ui/Register.tsx';
import Favorites from '@components/ui/Favorites.tsx';

const Layout = () => {
  //Cookie();
  return (
    <>
    <Header />
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
    errorElement: <ErrorFallback/>,
    children: [
      { index: true, element: <App />},
      { path: "home", element: <App />},
      { path: "movies", element: <App />},
      { path: "favorites", element: <Favorites />},
      { path: "login", element: <Login />},
      { path: "register", element: <Register />},
    ],
  }
]);

export default AppRoutes;