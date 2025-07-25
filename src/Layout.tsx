// Main App layout
import { Outlet } from 'react-router-dom';
import Header from './components/ui/Header'

const Layout = () => {
  return (
    <>
    <Header />
    <main className="main-content">
      <Outlet />
    </main>
    </>
  );
};

export default Layout