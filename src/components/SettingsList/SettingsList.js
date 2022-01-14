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
        value={children}
        {...props}
      />
      {children}
    </label>
  );
};

const MyDownloadInput = ({ label, ...props }) => {
  const [fakeField, setFakeField] = useState(null);

  const handleChange = e => {
    setFakeField(e?.target?.files[0]?.name);
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
          <button className={styles['form-btn']} type="submit">
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
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            <Form className={styles.form}>
              <MyTextInput
                label="Изменить имя"
                name="firstName"
                id="firstName"
                type="text"
                placeholder="John"
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
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            <Form className={styles.form}>
              <MyTextInput
                label="Изменить фамилию"
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Doe"
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
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm();
              }, 400);
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
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm();
              }, 400);
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
                  Изменить пол
                </div>
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
              console.log(values.avatar.name);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            {({ setFieldValue }) => (
              <Form
                // method="post"
                encType="multipart/form-data"
                className={styles.form}
              >
                <div className={styles['input-download-wrapper']}>
                  <input
                    className={styles['input-download']}
                    name="avatar"
                    accept="image/*"
                    type="file"
                    id="field__file-2"
                    onChange={event => {
                      setFieldValue('avatar', event.currentTarget.files[0]);
                    }}
                  />

                  <label
                    className={styles['input-download-label']}
                    htmlFor="field__file-2"
                  >
                    Иземенить аватар
                    <div className={styles['form-container']}>
                      <div className={styles['input-download-fake']}>
                        Выбрать файл
                      </div>
                    </div>
                  </label>
                </div>
                <button className={styles['form-btn']} type="submit">
                  Иземенить
                </button>
              </Form>
            )}
          </Formik>
        </li>
      </ul>
    </div>
  );
};
