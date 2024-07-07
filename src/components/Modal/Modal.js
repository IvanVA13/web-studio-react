import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import routes from '../../routes';
import { getUser, getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { addOrder } from '../../redux/orders';
import Backdrop from '../Wrappers/Backdrop';
import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const other = {
  'modal-close': `${routes.basename}/images/icon/sprite.svg#icon-close`,
};

const Modal = ({ handleClick }) => {
  const isAuth = useSelector(getIsAuthenticated);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [productType, setProductType] = useState('');
  const [comment, setComment] = useState('');
  const [termsConfirm, setTermsConfirm] = useState(false);
  if (isAuth && !name) {
    setName(`${user.firstName} ${user.lastName}`);
  }
  if (isAuth && !phone) {
    setPhone(`${user.phone.replace(/[()-]/g, '')}`);
  }
  if (isAuth && !email) {
    setEmail(`${user.email}`);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'productType':
        setProductType(value);
        break;
      case 'comment':
        setComment(value);
        break;
      case 'terms':
        setTermsConfirm(prev => !prev);
        break;

      default:
        console.warn(`This ${name} not support`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addOrder({ name, phone, email, productType, comment }));
    handleClick();
  };

  return createPortal(
    <Backdrop closeFunc={handleClick} toggle>
      <div className={styles.modal}>
        <button
          name="close"
          className={styles['modal__button-close']}
          type="button"
        >
          <svg
            name="close"
            className={styles['modal__icon-close']}
            width="11"
            height="11"
          >
            <use name="close" href={other['modal-close']}></use>
          </svg>
        </button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <b className={styles['modal__title']}>
            Оставьте свои данные, мы вам перезвоним
          </b>
          <label className={styles['form__field']}>
            <span className={styles['form__label']}>Имя</span>
            <input
              className={styles['form__input']}
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+\s*((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles deBatz deCastelmore d'Artagnan и т. п."
              autoComplete="off"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <svg className={styles['form__input-icon']}>
              <use
                href={`${routes.basename}/images/icon/sprite.svg#icon-modal-person`}
              ></use>
            </svg>
          </label>
          <label className={styles['form__field']}>
            <span className={styles['form__label']}>Телефон</span>
            <input
              className={styles['form__input']}
              type="tel"
              pattern="[0-9]+"
              maxLength="12"
              title="Номер телефона должен состоять из цифр, включая код страны. Например: 380670001122"
              autoComplete="off"
              required
              name="phone"
              value={phone}
              onChange={handleChange}
            />
            <svg className={styles['form__input-icon']}>
              <use
                href={`${routes.basename}/images/icon/sprite.svg#icon-modal-phone`}
              ></use>
            </svg>
          </label>
          <label className={styles['form__field']}>
            <span className={styles['form__label']}>Почта</span>
            <input
              className={styles['form__input']}
              type="email"
              autoComplete="off"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
            <svg className={styles['form__input-icon']}>
              <use
                href={`${routes.basename}/images/icon/sprite.svg#icon-modal-envelope`}
              ></use>
            </svg>
          </label>
          <label className={styles['form__field']}>
            <span className={styles['form__label']}>Вид товара</span>
            <select
              className={`${styles['form__input']} ${styles['form__input--second']}`}
              required
              name="productType"
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="веб-сайт">Веб-сайт</option>
              <option value="дизайн">Дизайн</option>
              <option value="приложение">Приложение</option>
              <option value="маркетинг">Маркетинг</option>
            </select>
          </label>
          <label
            className={`${styles['form__field']} ${styles['form__field--margin']}`}
          >
            <span className={styles['form__label']}>Комментарий</span>
            <textarea
              className={styles['form__textarea']}
              rows="10"
              placeholder="Введите текст"
              required
              name="comment"
              value={comment}
              onChange={handleChange}
            ></textarea>
          </label>
          <label className={styles['form__terms-field']}>
            <input
              className={styles['form__checkbox']}
              type="checkbox"
              name="terms"
              value={termsConfirm}
              onChange={handleChange}
            />
            <span className={styles['form__custom-checkbox']}></span>
            <span className={styles['form__terms-label']}>
              Соглашаюсь с рассылкой и принимаю
              <a
                className={styles['form__terms-link']}
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Условия договора
              </a>
            </span>
          </label>
          <button
            className={`${styles.button} ${styles['form__button']}`}
            disabled={!termsConfirm}
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
