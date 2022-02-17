import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';

import routes from '../routes';
import { register } from '../redux/auth';
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

const MyRadioBtn = ({ children, ...props }) => {
  return (
    <label className={styles['form-label__radio']}>
      <Field
        className={styles['form-radio-btn']}
        type="radio"
        value={children === 'мужской' ? 'male' : 'female'}
        {...props}
      />
      {children}
    </label>
  );
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        sex: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(25),
        lastName: Yup.string().max(25),
        email: Yup.string()
          .email('Указан неверный email')
          .required('Обязательно'),
        phone: Yup.string()
          .matches(/[0-9]+/, 'Номер телефона состоит только из цифр')
          .min(12, 'Номер телефона состоит из 12 цифр')
          .required('Обязательно'),
        password: Yup.string().min(6).required('Обязательно'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const credentials = {};
        Object.entries(values).forEach(value => {
          if (value[1]) {
            credentials[value[0]] = value[1];
          }
        });
        dispatch(register(credentials));
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <h1 className={styles['form-title']}>Регистрация</h1>
        <MyTextInput
          label="Имя"
          name="firstName"
          type="text"
          placeholder="Введите имя"
          autoComplete="off"
        />

        <MyTextInput
          label="Фамилия"
          name="lastName"
          type="text"
          placeholder="Введите фамилию"
          autoComplete="off"
        />

        <MyTextInput
          label="Email"
          name="email"
          type="email"
          placeholder="user@webstudio.com"
          autoComplete="off"
        />

        <MyTextInput
          label="Телефон"
          name="phone"
          type="tel"
          maxLength="12"
          autoCorrect="true"
          placeholder="Введите номер телефона"
          autoComplete="off"
        />

        <MyTextInput
          label="Пароль"
          name="password"
          type="password"
          autoComplete="off"
        />
        <div className={styles['form-container']}>
          <div className={styles['form-label']} id="my-radio-group">
            Пол
          </div>
          <div role="group" aria-labelledby="my-radio-group">
            <MyRadioBtn name="sex">мужской</MyRadioBtn>
            <MyRadioBtn name="sex">женский</MyRadioBtn>
          </div>
        </div>

        <button
          className={`${styles.button} ${styles['form-btn']}`}
          type="submit"
        >
          Зарегистрироваться
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
          Регистрация через Google
        </a>
      </Form>
    </Formik>
  );
};

export default RegisterPage;
