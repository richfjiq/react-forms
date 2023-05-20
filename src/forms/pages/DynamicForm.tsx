import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

type Option = {
  id: string;
  label: string;
};
interface Field {
  type: string;
  name: string;
  placeholder?: string;
  label: string;
  options?: Option[];
}

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This field is required.');
    }

    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 2,
        `Min length is ${(rule as any).value || 2}`
      );
    }

    if (rule.type === 'email') {
      schema = schema.matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        'Invalid Email.'
      );
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(
              ({ type, name, placeholder, label, options }: Field) => {
                if (
                  type === 'text' ||
                  type === 'password' ||
                  type === 'email'
                ) {
                  return (
                    <MyTextInput
                      key={name}
                      label={label}
                      type={type}
                      name={name}
                      placeholder={placeholder}
                    />
                  );
                } else if (type === 'select') {
                  return (
                    <MySelect key={name} label={label} name={name}>
                      <option value="">Select an option</option>
                      {options?.map((opt) => (
                        <option key={opt.label} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </MySelect>
                  );
                }

                return <span>Type: {type} is not supported</span>;
              }
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
