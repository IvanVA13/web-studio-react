import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import routes from '../routes';
import { login, googleAuth, currentUser } from '../redux/auth';
import googleIcon from '../images/icon/google-symbol.svg';
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
  const loc = useLocation();
  const dispatch = useDispatch();
  if (loc.search && loc.search.slice(1).split(/&|=/).length === 6) {
    const searchArr = loc.search.slice(1).split('&');
    const session = {};
    searchArr.forEach(searchParam => {
      const paramArr = searchParam.split('=');
      if (paramArr[0].match(/token|refreshToken|sid/) && paramArr[1]) {
        session[paramArr[0]] = paramArr[1];
      } else {
        return;
      }
    });
    dispatch(googleAuth(session));
    dispatch(currentUser());
  }
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
        dispatch(login(values));
        setSubmitting(false);
        resetForm();
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
        <button
          className={`${styles.button} ${styles['form-btn']}`}
          type="submit"
        >
          Вход
        </button>
        <a
          href={`${routes.serverUrl}/users/google-auth`}
          className={styles['google-reg-link']}
        >
          <img
            src={googleIcon}
            alt="Google Symbol"
            className={`${styles.image} ${styles['google-reg-icon']}`}
          />
          Вход через Google
        </a>
        <NavLink to={routes.verify} className={styles['form-link']}>
          Выслать повторно письмо для верификации
        </NavLink>
      </Form>
    </Formik>
  );
};

export default LogInPage;
