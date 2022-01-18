import React, { useState } from 'react';
import styles from './SettingsList.module.scss';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={styles['form-label']} htmlFor={props.id || props.name}>
        <span>{label}</span>
        {meta.touched && meta.error ? (
          <div className={styles['form-error']}>*{meta.error}</div>
        ) : null}
      </label>
      <div className={styles['form-container']}>
        <input className={styles['form-input']} {...field} {...props} />
        <button className={styles['form-btn']} type="submit">
          Иземенить
        </button>
      </div>
    </>
  );
};

const MyRadioBtn = ({ children, ...props }) => {
  return (
    <label className={styles['form-radio']}>
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

const MyDownloadInput = ({ label, setFieldValue, ...props }) => {
  const [fakeField, setFakeField] = useState(null);

  const handleChange = e => {
    setFieldValue('avatar', e?.currentTarget?.files[0]);
    setFakeField(e?.target?.files[0]?.name);
  };

  const handleClick = () => {
    setFakeField(null);
  };

  return (
    <div className={styles['input-download-wrapper']}>
      <input
        className={styles['input-download']}
        name="file"
        type="file"
        id="field__file-2"
        {...props}
        onChange={handleChange}
      />

      <label className={styles['input-download-label']} htmlFor="field__file-2">
        {label}
        <div className={styles['form-container']}>
          <div className={styles['input-download-fake']}>
            {fakeField ? fakeField : 'Выбрать файл'}
          </div>
          <button
            className={styles['form-btn']}
            onClick={handleClick}
            type="submit"
          >
            Иземенить
          </button>
        </div>
      </label>
    </div>
  );
};

export const SettingsList = () => {
  return (
    <div className="container">
      <ul className={`${styles['settings-list']}`}>
        <li className={`${styles['settings-list-item']}`}>
          <Formik
            initialValues={{
              firstName: '',
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required('обязательно'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            <Form className={styles.form}>
              <MyTextInput
                label="Изменить имя"
                name="firstName"
                id="firstName"
                type="text"
                placeholder="Введите имя"
                autoComplete="off"
              />
            </Form>
          </Formik>
        </li>
        <li className={`${styles['settings-list-item']}`}>
          <Formik
            initialValues={{
              lastName: '',
            }}
            validationSchema={Yup.object({
              lastName: Yup.string().required('обязательно'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            <Form className={styles.form}>
              <MyTextInput
                label="Изменить фамилию"
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Введите фамилию"
                autoComplete="off"
              />
            </Form>
          </Formik>
        </li>
        <li className={`${styles['settings-list-item']}`}>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Указан неверный email')
                .required('обязательно'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            <Form className={styles.form}>
              <MyTextInput
                label="Изменить Email"
                name="email"
                id="email"
                type="email"
                placeholder="user@webstudio.com"
                autoComplete="off"
              />
            </Form>
          </Formik>
        </li>
        <li className={`${styles['settings-list-item']}`}>
          <Formik
            initialValues={{
              password: '',
            }}
            validationSchema={Yup.object({
              password: Yup.string().min(6).required('обязательно'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            <Form className={styles.form}>
              <MyTextInput
                label="Изменить пароль"
                name="password"
                id="password"
                type="password"
                placeholder="password"
                autoComplete="off"
              />
            </Form>
          </Formik>
        </li>
        <li className={`${styles['settings-list-item']}`}>
          <Formik
            initialValues={{
              sex: '',
            }}
            validationSchema={Yup.object({
              sex: Yup.string().required('обязательно'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            <Form className={styles.form}>
              <div className={styles['form-label']} id="my-radio-group">
                Изменить пол
              </div>
              <div className={styles['form-container']}>
                <div role="group" aria-labelledby="my-radio-group">
                  <MyRadioBtn name="sex">мужской</MyRadioBtn>
                  <MyRadioBtn name="sex">женский</MyRadioBtn>
                </div>
                <button className={styles['form-btn']} type="submit">
                  Иземенить
                </button>
              </div>
            </Form>
          </Formik>
        </li>
        <li className={`${styles['settings-list-item']}`}>
          <Formik
            initialValues={{
              avatar: '',
            }}
            validationSchema={Yup.object().shape({
              avatar: Yup.mixed().required('обязательно'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ setFieldValue }) => (
              <Form encType="multipart/form-data" className={styles.form}>
                <MyDownloadInput
                  label="Иземенить аватар"
                  name="avatar"
                  accept="image/*"
                  setFieldValue={setFieldValue}
                />
              </Form>
            )}
          </Formik>
        </li>
      </ul>
    </div>
  );
};