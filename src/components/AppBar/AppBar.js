// import { useSelector } from 'react-redux';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

import MenuMob from '../MenuMob';
import Navigation from '../Navigation';
import Contacts from '../Contacts';
import UserMenu from '../UserMenu';
import Container from '../Wrappers/Container';
import routes from '../../routes';
import styles from './AppBar.module.scss';

const AppBar = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleClick = () => {
    setToggleModal(prevToggle => !prevToggle);
  };
  return (
    <header className={styles.header}>
      <Container>
        <ul className={styles['header__container']}>
          <li className={styles['header__item']}>
            <NavLink className={styles.logo} exact to={routes.home}>
              <span className={styles['logo__accent']}>Web</span>Studio
            </NavLink>
          </li>
          <li className={styles['header__item']}>
            <MenuMob />
          </li>
          <li className={styles['header__item']}>
            <Navigation />
          </li>
          <li className={styles['header__item']}>
            <Contacts />
          </li>
          <li className={styles['header__item']}>
            <button
              className={`${styles['button']} ${styles['header__button']}`}
              type="button"
              onClick={handleClick}
            >
              <BiUserCircle className={styles['header__guest-icon']} />
            </button>
            {toggleModal && <UserMenu closeUserMenu={handleClick} />}
          </li>
        </ul>
      </Container>
    </header>
  );
};
export default AppBar;
