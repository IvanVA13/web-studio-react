import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import Contacts from '../Contacts';
import Socials from '../Socials';
import styles from './Footer.module.scss';
import Container from '../Wrappers/Container';

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
    <footer className={styles.footer}>
      <Container type="footer">
        <ul className={styles['footer__list']}>
          <li className={styles['footer__item']}>
            <NavLink
              className={`${styles.logo} ${styles['logo--white']}`}
              exact
              to={routes.home}
            >
              <span className={styles['logo__accent']}>Web</span>Studio
            </NavLink>
            <address className={styles.address}>
              <p className={styles['address__location']}>
                г. Киев, пр-т Леси Украинки, 26
              </p>
              <Contacts type={'footer'} />
            </address>
          </li>
          <li className={styles['footer__item']}>
            <h2 className={styles['footer__title']}>присоединяйтесь</h2>
            <Socials footer socLink={socMain} type={'footer'} />
          </li>
          <li className={styles['footer__item']}>
            <h2 className={styles['footer__title']}>Подпишитесь на рассылку</h2>
            <form
              className={`${styles.form} ${styles['footer__form']}`}
              onSubmit={handleSubmit}
            >
              <input
                className={styles['form__input-alt']}
                type="email"
                autoComplete="off"
                required
                name="user-email"
                placeholder="E-mail"
                value={userEmail}
                onChange={handleChange}
              />
              <button
                className={`${styles.button} ${styles['form__button']} ${styles['form__button--footer']}`}
                type="submit"
              >
                Подписаться
                <svg className={styles['button__icon']} width="24" height="24">
                  <use href={other.send}></use>
                </svg>
              </button>
            </form>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
