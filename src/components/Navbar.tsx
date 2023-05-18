import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { RegisterPage } from '../forms/pages/RegisterPage';

interface Props {
  children: ReactNode;
}

const Navbar: FC<Props> = ({ children }) => {
  return (
    <div
      style={{ padding: 0, margin: 0, position: 'relative', height: '100vh' }}
    >
      <nav>
        <img src="vite.svg" alt="React Logo" height={100} width={100} />
        <ul>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Register Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/formik-basic"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Formik Basic
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/formik-yup"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Formik Yup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default Navbar;
