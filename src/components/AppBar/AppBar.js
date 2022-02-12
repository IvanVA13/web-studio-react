import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiUserCircle } from 'react-icons/bi';
import { CSSTransition } from 'react-transition-group';

import MenuMob from '../MenuMob';
import Navigation from '../Navigation';
import Contacts from '../Contacts';
import UserMenu from '../UserMenu';
import Container from '../Wrappers/Container';
import Backdrop from '../Wrappers/Backdrop';
import routes from '../../routes';
import styles from './AppBar.module.scss';
import { getIsAuthenticated, getUserAvatar } from '../../redux/auth';

const AppBar = () => {
  const isLogIn = useSelector(getIsAuthenticated);
  const userAvatar = useSelector(getUserAvatar);
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
              {isLogIn ? (
                <img
                  src={userAvatar}
                  alt="user avatar"
                  className={`${styles.image} ${styles['header__user-icon']} ${
                    toggleModal && styles['header__user-icon-active']
                  }`}
                />
              ) : (
                <BiUserCircle
                  className={`${styles['header__guest-icon']} ${
                    toggleModal && styles['header__guest-icon-active']
                  }`}
                />
              )}
            </button>
            <Backdrop closeFunc={handleClick} toggle={toggleModal}>
              <CSSTransition
                in={toggleModal}
                timeout={250}
                classNames="scale-anim2"
                unmountOnExit
              >
                <UserMenu closeUserMenu={handleClick} toggle={toggleModal} />
              </CSSTransition>
            </Backdrop>
          </li>
        </ul>
      </Container>
    </header>
  );
};
export default AppBar;
