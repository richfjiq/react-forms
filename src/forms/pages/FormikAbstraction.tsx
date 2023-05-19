import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must have 15 characters or less.')
            .required('Required'),
          lastName: Yup.string()
            .max(10, 'Must have 10 characters or less.')
            .required('Required'),
          email: Yup.string()
            .matches(
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              'Invalid Email.'
            )
            .required('Required'),
          terms: Yup.boolean().oneOf(
            [true],
            'You have to accept the terms and conditions.'
          ),
          jobType: Yup.string()
            .notOneOf(['it-junior'], 'This options is not allowed.')
            .required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Ricardo"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Flores"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="test@test.com"
              type="email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions." name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
