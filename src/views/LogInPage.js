import React from 'react';
import { Formik, Form, useField } from 'formik';
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

const LogInPage = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Указан неверный email')
          .required('Обязательно'),
        password: Yup.string().min(6).required('Обязательно'),
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
        <h1 className={styles['form-title']}>Вход</h1>

        <MyTextInput
          label="Email"
          name="email"
          type="email"
          placeholder="user@webstudio.com"
          autoComplete="off"
        />

        <MyTextInput
          label="Пароль"
          name="password"
          type="password"
          autoComplete="off"
        />

        <button className={styles['form-btn']} type="submit">
          Вход
        </button>
      </Form>
    </Formik>
  );
};

export default LogInPage;
