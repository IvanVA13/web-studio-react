import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { resetPassword } from '../redux/auth';
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
  const loc = useRouteMatch();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        password: '',
      }}
      validationSchema={Yup.object({
        password: Yup.string().min(6).required('Обязательно'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(
          resetPassword({
            resetPasswordToken: loc?.params?.id,
            password: values,
          }),
        );
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <h1 className={styles['form-title']}>Введите новый пароль</h1>
        <MyTextInput
          label="Навый пароль"
          name="password"
          type="password"
          autoComplete="off"
        />
        <button
          className={`${styles.button} ${styles['form-btn']}`}
          type="submit"
        >
          Изменить пароль
        </button>
      </Form>
    </Formik>
  );
};

export default LogInPage;
