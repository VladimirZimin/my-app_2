import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import styled from 'styled-components';

const userSchema = object({
  login: string().required(),
  password: string().min(6).max(10).required(),
});

const Input = styled(Field)`
  background-color: #ffd166;
  color: #26547d;
`;

const Error = styled.div`
  color: #ef486f;
`;

const initialValues = {
  login: '',
  password: '',
};

export default function FormikForm() {
  const handleSubmit = (values, actions) => {
    const { resetForm } = actions;

    console.log(values);
    console.log(actions);

    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form autoComplete="off">
          <label>
            Login
            <Input type="text" name="login" />
            <ErrorMessage name="login" component={Error} />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
