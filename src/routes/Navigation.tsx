import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar';
import {
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from '../forms/pages';

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
          path="formik-basic"
          element={
            <Navbar>
              <FormikBasicPage />
            </Navbar>
          }
        />
        <Route
          path="formik-yup"
          element={
            <Navbar>
              <FormikYupPage />
            </Navbar>
          }
        />
        <Route
          path="formik-components"
          element={
            <Navbar>
              <FormikComponents />
            </Navbar>
          }
        />
        <Route
          path="formik-abstraction"
          element={
            <Navbar>
              <FormikAbstraction />
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
        <Route path="/*" element={<Navigate to="/formik-basic" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
