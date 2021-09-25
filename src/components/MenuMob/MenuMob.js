import { useState } from 'react';

import routes from '../../routes';
import Navigation from '../Navigation';
import Contacts from '../Contacts';

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
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      handleClick();
    }
  };

  return (
    <div className="menu-mob">
      <button
        className={`menu-mob__menu ${toggleBurger && 'is-open'}`}
        aria-expanded="false"
        aria-controls="menu-container"
        onClick={handleClick}
      >
        <svg
          className="menu-mob__icon"
          width="40"
          height="40"
          aria-label="Переключатель мобильного меню"
        >
          <use className="menu-mob__icon-menu" href={other.menu}></use>
          <use
            className="menu-mob__icon-close"
            href={other['menu-close']}
          ></use>
        </svg>
      </button>
      <div
        className={`${toggleBurger && 'menu-mob__backdrop'}`}
        onClick={closeMenu}
      >
        <div
          className={`menu-mob__container ${toggleBurger && 'is-open'}`}
          id="menu-container"
        >
          <Navigation />
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default MenuMob;
