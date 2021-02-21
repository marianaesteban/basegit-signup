import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from 'components/Input';
import { SubmitButton, FormInput } from './styles';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      //TODO: use yup for validation
      validate={(values) => {
        const errors = { email: '', password: '', confirmPassword: '' };
        if (!values.email) {
          errors.email = 'Please enter your email address.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email =
            'Please enter a valid email address. Example: yourname@example.com';
        }
        if (values.password && values.confirmPassword) {
          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match.';
          }
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <Field
            as={Input}
            label="Email address"
            id="email"
            name="email"
            type="email"
            error={errors.email}
          />
          <Field
            as={Input}
            label="Passsword"
            id="password"
            name="password"
            type="password"
            error={errors.password}
          />
          <Field
            as={Input}
            label="Confirm Passsword"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            error={errors.confirmPassword}
          />
          <SubmitButton type="submit" disabled={isSubmitting}>
            Sign Up
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
