import React from 'react';
import styles from './SettingsList.module.scss';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';

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

const MyDownloadInput = ({ label, ...props }) => {
  // const [field, meta] = useField(props);
  return (
    <div className={styles['field__wrapper']}>
      <input
        className={styles['field__file']}
        name="file"
        type="file"
        id="field__file-2"
      />

      <label className={styles['field__file-wrapper']} for="field__file-2">
        <div className={styles['field__file-fake']}>Файл не вбран</div>
        <div className={styles['field__file-button']}>Выбрать</div>
      </label>
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

export const SettingsList = () => {
  return (
    <div className={`container ${styles['form-main-container']}`}>
      <Formik
        initialValues={{
          firstName: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('required'),
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
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
            autoComplete="off"
          />
          <button className={styles['form-btn']} type="submit">
            Change
          </button>
        </Form>
      </Formik>
      <Formik
        initialValues={{
          lastName: '',
        }}
        validationSchema={Yup.object({
          lastName: Yup.string().required('required'),
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
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            autoComplete="off"
          />
          <button className={styles['form-btn']} type="submit">
            Change
          </button>
        </Form>
      </Formik>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('required'),
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
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="user@webstudio.com"
            autoComplete="off"
          />
          <button className={styles['form-btn']} type="submit">
            Change
          </button>
        </Form>
      </Formik>
      <Formik
        initialValues={{
          password: '',
        }}
        validationSchema={Yup.object({
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
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="password"
            autoComplete="off"
          />
          <button className={styles['form-btn']} type="submit">
            Change
          </button>
        </Form>
      </Formik>
      <Formik
        initialValues={{
          sex: '',
        }}
        validationSchema={Yup.object({
          sex: Yup.string().required('required'),
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
            Change
          </button>
        </Form>
      </Formik>
      <Formik
        initialValues={{
          avatar: '',
        }}
        validationSchema={Yup.object({
          avatar: Yup.string().required('required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        <Form
          method="post"
          enctype="multipart/form-data"
          className={styles.form}
        >
          <MyDownloadInput
            label="Avatar"
            name="avatar"
            type="file"
            accept="image/*"
          />
          <button className={styles['form-btn']} type="submit">
            Change
          </button>
        </Form>
      </Formik>
    </div>
  );
};
