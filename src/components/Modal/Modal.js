import React, { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import routes from '../../routes';

const modalRoot = document.querySelector('#modal-root');

const other = {
  'modal-close': `${routes.basename}/images/icon/sprite.svg#icon-close`,
};

const Modal = ({ handleClick }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const closeModal = useCallback(
    e => {
      if (e.code === 'Escape' || e.target === e.currentTarget) {
        handleClick();
      }
    },
    [handleClick],
  );

  const [termsConfirm, setTermsConfirm] = useState(false);
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

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
    console.log({ name, phone, email, comment });
    closeModal(e);
  };

  return createPortal(
    <div className="backdrop" onClick={closeModal}>
      <div className="modal">
        <button
          className="modal__button-close"
          onClick={closeModal}
          type="button"
        >
          <svg
            className="modal__icon-close"
            width="11"
            height="11"
            onClick={closeModal}
          >
            <use href={other['modal-close']}></use>
          </svg>
        </button>
        <form className="form" onSubmit={handleSubmit}>
          <b className="modal__title">
            Оставьте свои данные, мы вам перезвоним
          </b>
          <label className="form__field">
            <span className="form__label">Имя</span>
            <input
              className="form__input"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              autoComplete="off"
              required
              name="name"
              value={name}
              onChange={handleChange}
            />
            <svg className="form__input-icon">
              <use
                href={`${routes.basename}/images/icon/sprite.svg#icon-modal-person`}
              ></use>
            </svg>
          </label>
          <label className="form__field">
            <span className="form__label">Телефон</span>
            <input
              className="form__input"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              autoComplete="off"
              required
              name="phone"
              value={phone}
              onChange={handleChange}
            />
            <svg className="form__input-icon">
              <use
                href={`${routes.basename}/images/icon/sprite.svg#icon-modal-phone`}
              ></use>
            </svg>
          </label>
          <label className="form__field">
            <span className="form__label">Почта</span>
            <input
              className="form__input"
              type="email"
              autoComplete="off"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
            <svg className="form__input-icon">
              <use
                href={`${routes.basename}/images/icon/sprite.svg#icon-modal-envelope`}
              ></use>
            </svg>
          </label>
          <label className="form__field form__field--margin">
            <span className="form__label">Комментарий</span>
            <textarea
              className="form__textarea"
              rows="10"
              placeholder="Введите текст"
              name="comment"
              value={comment}
              onChange={handleChange}
            ></textarea>
          </label>
          <label className="form__terms-field">
            <input
              className="form__checkbox"
              type="checkbox"
              name="terms"
              value={termsConfirm}
              onChange={handleChange}
            />
            <span className="form__custom-checkbox"></span>
            <span className="form__terms-label">
              Соглашаюсь с рассылкой и принимаю
              <a
                className="form__terms-link"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Условия договора
              </a>
            </span>
          </label>
          <button
            className="button form__button"
            disabled={!termsConfirm}
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
