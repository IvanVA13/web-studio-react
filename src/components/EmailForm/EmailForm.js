import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styles from '../../sass/Reg-form.module.scss';

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

const EmailForm = ({ title, operationFunc }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Указан неверный email')
          .required('Обязательно'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(operationFunc(values));
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <p className={styles['form-desc']}>{title}</p>
        <MyTextInput
          label="Email"
          name="email"
          type="email"
          placeholder="user@webstudio.com"
          autoComplete="off"
        />
        <button
          className={`${styles.button} ${styles['form-btn']}`}
          type="submit"
        >
          Отправить
        </button>
      </Form>
    </Formik>
  );
};

export default EmailForm;
