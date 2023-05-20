import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Max length is 15 characters.')
            .min(2, 'Min length is 2 characters.')
            .required('Required'),
          email: Yup.string()
            .matches(
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              'Invalid Email.'
            )
            .required('Required'),
          password1: Yup.string()
            .min(6, 'Min length is 6 characters.')
            .required('Required'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Passwords must match')
            .required(),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="test@test.com"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="******"
            />
            <MyTextInput
              label="Repeat Password"
              name="password2"
              type="password"
              placeholder="******"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
