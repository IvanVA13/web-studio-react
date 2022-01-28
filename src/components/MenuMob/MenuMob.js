import { useState } from 'react';

import routes from '../../routes';
import Navigation from '../Navigation';
import Contacts from '../Contacts';
import UserMenu from '../UserMenu';
import styles from './MenuMob.module.scss';

const other = {
  menu: `${routes.basename}/images/icon/sprite.svg#icon-menu`,
  'menu-close': `${routes.basename}/images/icon/sprite.svg#icon-menu-close`,
};

const MenuMob = () => {
  const [toggleBurger, setToggleBurger] = useState(false);
  const handleClick = () => {
    setToggleBurger(prevToggle => !prevToggle);
  };

  const closeMenu = e => {
    if (e.target === e.currentTarget) {
      handleClick();
    }
  };

  return (
    <div className={styles['menu-mob']}>
      <button
        className={`${styles['menu-mob__menu']} ${
          toggleBurger && styles['is-open']
        }`}
        aria-expanded="false"
        aria-controls="menu-container"
        onClick={handleClick}
      >
        <svg
          className={styles['menu-mob__icon']}
          width="40"
          height="40"
          aria-label="Переключатель мобильного меню"
        >
          <use
            className={styles['menu-mob__icon-menu']}
            href={other.menu}
          ></use>
          <use
            className={styles['menu-mob__icon-close']}
            href={other['menu-close']}
          ></use>
        </svg>
      </button>
      <div
        className={`${toggleBurger && styles['menu-mob__backdrop']}`}
        onClick={closeMenu}
      >
        <div
          className={`${styles['menu-mob__container']} ${
            toggleBurger && styles['is-open']
          }`}
          id="menu-container"
        >
          <Navigation />
          <Contacts />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default MenuMob;
