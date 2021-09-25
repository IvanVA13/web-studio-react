import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import Contacts from '../Contacts';
import Socials from '../Socials';

const socMain = [
  'https://instagram.com',
  'https://twitter.com',
  'https://facebook.com',
  'https://linkedin.com',
];

const other = {
  send: `${routes.basename}/images/icon/sprite.svg#icon-send`,
};

const Footer = () => {
  const [userEmail, setUserEmail] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'user-email':
        setUserEmail(value);
        break;

      default:
        console.warn(`This ${name} not support`);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(userEmail);
    reset();
  };

  const reset = () => {
    setUserEmail('');
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <NavLink className="logo logo--white" exact to={routes.home}>
              <span className="logo__accent">Web</span>Studio
            </NavLink>
            <address className="address">
              <p className="address__location">
                г. Киев, пр-т Леси Украинки, 26
              </p>
              <Contacts type={'footer'} />
            </address>
          </li>
          <li className="footer__item">
            <h2 className="title footer__title">присоединяйтесь</h2>
            <Socials footer socLink={socMain} type={'footer'} />
          </li>
          <li className="footer__item">
            <h2 className="title footer__title">Подпишитесь на рассылку</h2>
            <form className="form footer__form" onSubmit={handleSubmit}>
              <input
                className="form__input-alt"
                type="email"
                autoComplete="off"
                required
                name="user-email"
                placeholder="E-mail"
                value={userEmail}
                onChange={handleChange}
              />
              <button
                className="button form__button form__button--footer"
                type="submit"
              >
                Подписаться
                <svg className="button__icon" width="24" height="24">
                  <use href={other.send}></use>
                </svg>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
