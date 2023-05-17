import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar';
import { RegisterPage } from '../forms/pages/RegisterPage';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="register"
          element={
            <Navbar>
              <RegisterPage />
            </Navbar>
          }
        />
        <Route
          path="about"
          element={
            <Navbar>
              <h1>About Page</h1>
            </Navbar>
          }
        />
        <Route
          path="users"
          element={
            <Navbar>
              <h1>Users Page</h1>
            </Navbar>
          }
        />
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
