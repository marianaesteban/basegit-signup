import { useEffect, useState } from 'react';
import { Formik, Form, Field, FormikErrors } from 'formik';
import Text from 'components/Text';
import Input from 'components/Input';
import { SubmitButton } from './styles';

const SignupForm = () => {
  useEffect(function () {
    const registeredUsers = localStorage.getItem('registeredUsers');
    !registeredUsers && localStorage.setItem('registeredUsers', JSON.stringify([]));
  }, []);

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        initialStatus={{ registeredUser: false, success: false }}
        //TODO: use yup for validation
        validate={(values) => {
          const errors: FormikErrors<typeof values> = {};
          if (!values.email) {
            errors.email = 'Please enter your email address.';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email =
              'Please enter a valid email address. Example: yourname@example.com';
          }
          //TODO: the UI and logic here could use an improvement.
          if (!values.password) {
            errors.password = 'Please enter a password.';
          } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(values.password)) {
            let passErrors: string[] = [];
            if (!/^(?=.*\d)/.test(values.password)) {
              passErrors.push('include a number');
            }
            if (!/(?=.*[a-z])/.test(values.password)) {
              passErrors.push('include a lowercase letter');
            }
            if (!/(?=.*[A-Z])/.test(values.password)) {
              passErrors.push('include an uppercase letter');
            }
            if (!/.{6,}$/.test(values.password)) {
              passErrors.push('be at least 6 characters long');
            }
            errors.password = `Password is not valid. Your password must ${passErrors.map(
              (error, index) => ` ${error}${index + 1 === passErrors.length ? '.' : ''}`
            )}`;
          }
          if (values.password && values.confirmPassword) {
            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = 'Passwords do not match.';
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
          const newUser = { email: values.email, password: values.password };
          const registeredUsers = localStorage.getItem('registeredUsers');

          const userArray =
            registeredUsers && registeredUsers.length && JSON.parse(registeredUsers);

          const isRegisteredUser = !!userArray.find(
            (user: { email: string; password: string }) => user.email === newUser.email
          );

          setTimeout(() => {
            if (isRegisteredUser) {
              setStatus({ registeredUser: true });
            } else {
              userArray.push(newUser);
              window.localStorage.setItem('registeredUsers', JSON.stringify(userArray));
              resetForm({});
              setStatus({ success: true });
            }

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ touched, errors, status, setStatus, handleChange, isSubmitting }) => (
          <>
            <Form>
              <Field
                as={Input}
                label="Email address"
                id="email"
                name="email"
                type="email"
                onChange={(e: Event) => {
                  setStatus('');
                  handleChange(e);
                }}
                autoComplete="user-email"
                error={touched.email && errors.email}
              />
              <Field
                as={Input}
                label="Passsword"
                id="password"
                name="password"
                type="password"
                onChange={(e: Event) => {
                  setStatus('');
                  handleChange(e);
                }}
                autoComplete="new-password"
                error={touched.password && errors.password}
              />
              <Field
                as={Input}
                label="Confirm Passsword"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={(e: Event) => {
                  setStatus('');
                  handleChange(e);
                }}
                autoComplete="confirm-password"
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <SubmitButton aria-label="Sign up" type="submit" disabled={isSubmitting}>
                Sign Up
              </SubmitButton>
            </Form>
            {status?.registeredUser && (
              <Text margin="10px 0">
                Looks like you already have an account. <a href="#">Sign In</a>
              </Text>
            )}
            {status?.success && (
              <Text margin="10px 0">
                Registration complete! Check your email and follow the instructions to
                complete your registration.
              </Text>
            )}
          </>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
