import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import styles from '../sass/Reg-form.module.scss';
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles['form-container']}>
      <label className={styles['form-label']} htmlFor={props.id || props.name}>
        {label}
        {meta.touched && meta.error ? (
          <div className={styles['form-error']}>*{meta.error}</div>
        ) : null}
      </label>
      <input className={styles['form-input']} {...field} {...props} />
    </div>
  );
};

const MyRadioBtn = ({ children, ...props }) => {
  return (
    <label className={styles['form-label__radio']}>
      <Field
        className={styles['form-radio-btn']}
        type="radio"
        value={children}
        {...props}
      />
      {children}
    </label>
  );
};

const RegisterPage = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        sex: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string(),
        lastName: Yup.string(),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(6).required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      <Form className={styles.form}>
        <h1 className={styles['form-title']}>Signup</h1>
        <MyTextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="John"
          autoComplete="off"
        />

        <MyTextInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Doe"
          autoComplete="off"
        />

        <MyTextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="user@webstudio.com"
          autoComplete="off"
        />

        <MyTextInput
          label="Password"
          name="password"
          type="password"
          autoComplete="off"
        />
        <div className={styles['form-container']}>
          <div className={styles['form-label']} id="my-radio-group">
            Sex
          </div>
          <div role="group" aria-labelledby="my-radio-group">
            <MyRadioBtn name="sex">male</MyRadioBtn>
            <MyRadioBtn name="sex">female</MyRadioBtn>
          </div>
        </div>

        <button className={styles['form-btn']} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterPage;
