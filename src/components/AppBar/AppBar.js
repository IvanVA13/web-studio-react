// import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

import MenuMob from '../MenuMob';
import Navigation from '../Navigation';
import Contacts from '../Contacts';
import UserMenu from '../UserMenu';
import routes from '../../routes';
import { useState } from 'react';
import styles from './AppBar.module.scss';

const AppBar = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleClick = () => {
    setToggleModal(prevToggle => !prevToggle);
  };
  return (
    <header className="header">
      <ul className="container header__container">
        <li className="header__item">
          <NavLink className="logo" exact to={routes.home}>
            <span className="logo__accent">Web</span>Studio
          </NavLink>
        </li>
        <li className="header__item">
          <MenuMob />
        </li>
        <li className="header__item">
          <Navigation />
        </li>
        <li className="header__item">
          <Contacts />
        </li>
        <li className="header__item">
          <button
            className="button header__button"
            type="button"
            onClick={handleClick}
          >
            <BiUserCircle className={styles['guest-icon']} />
          </button>
          {toggleModal && <UserMenu closeUserMenu={handleClick} />}
        </li>
      </ul>
    </header>
  );
};
export default AppBar;
