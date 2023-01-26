// import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
