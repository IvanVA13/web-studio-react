import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles['site-nav']}>
      <ul className={styles['site-nav__list']}>
        <li className={styles['site-nav__item']}>
          <NavLink
            exact
            className={styles['site-nav__link']}
            activeClassName={styles['site-nav__link--current']}
            to={routes.home}
          >
            Студия
          </NavLink>
        </li>
        <li className={styles['site-nav__item']}>
          <NavLink
            className={styles['site-nav__link']}
            activeClassName={styles['site-nav__link--current']}
            to={routes.portfolio}
          >
            Портфолио
          </NavLink>
        </li>
        <li className={styles['site-nav__item']}>
          <NavLink
            className={styles['site-nav__link']}
            activeClassName={styles['site-nav__link--current']}
            to={routes.contacts}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
