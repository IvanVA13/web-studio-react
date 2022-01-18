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
        value={children === 'мужской' ? 'male' : 'female'}
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
        email: Yup.string()
          .email('Указан неверный email')
          .required('Обязательно'),
        password: Yup.string().min(6).required('Обязательно'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
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
          label="Пароль"
          name="password"
          type="password"
          autoComplete="off"
        />
        <div className={styles['form-container']}>
          <div className={styles['form-label']} id="my-radio-group">
            Sex
          </div>
          <div role="group" aria-labelledby="my-radio-group">
            <MyRadioBtn name="sex">мужской</MyRadioBtn>
            <MyRadioBtn name="sex">женский</MyRadioBtn>
          </div>
        </div>

        <button className={styles['form-btn']} type="submit">
          Зарегистрироваться
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterPage;
