import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegRegistered, FaClipboardList } from 'react-icons/fa';
import { FiLogIn, FiSettings } from 'react-icons/fi';
import { ImExit } from 'react-icons/im';

import { logout } from '../../redux/auth';
import { getIsAuthenticated } from '../../redux/auth';
import Container from '../Wrappers/Container';
import User from '../User';
import useWindowDimensions from '../../helpers/useWindowDimensions';
import styles from './UserMenu.module.scss';
import Confirm from '../Confirm/Confirm';

const userMenuData = [
  {
    name: 'register',
    icon: <FaRegRegistered className={styles['user-menu-icon']} />,
    title: 'Регистрация',
    type: 'link',
    route: 'public',
  },
  {
    name: 'login',
    icon: <FiLogIn className={styles['user-menu-icon']} />,
    title: 'Вход',
    type: 'link',
    route: 'public',
  },
  {
    name: 'logout',
    icon: <ImExit className={styles['user-menu-icon']} />,
    title: 'Выход',
    type: 'act',
    route: 'private',
  },
  {
    name: 'orders',
    icon: <FaClipboardList className={styles['user-menu-icon']} />,
    title: 'Заказы',
    type: 'link',
    route: 'private',
  },
  {
    name: 'settings',
    icon: <FiSettings className={styles['user-menu-icon']} />,
    title: 'Настройки аккаунта',
    type: 'link',
    route: 'private',
  },
];

const UserMenu = ({ closeUserMenu }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const isLogIn = useSelector(getIsAuthenticated);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const logoutClick = () => {
    dispatch(logout());
    closeUserMenu();
  };
  const toggleModalClick = () => {
    setToggleModal(prevToggle => !prevToggle);
  };
  return (
    <Container type="no-click">
      <div className={styles['user-menu']}>
        {isLogIn && width >= 768 && <User />}
        {toggleModal ? (
          <Confirm
            title="Вы точно хотите выйти?"
            confirmAct={logoutClick}
            closeModal={toggleModalClick}
          />
        ) : (
          <ul className={styles['user-menu-list']}>
            {userMenuData
              .filter(
                item =>
                  (item.route === 'public' && !isLogIn) ||
                  (item.route === 'private' && isLogIn),
              )
              .map(({ name, icon, title, type }, i) => {
                return (
                  <li className={styles['user-menu-item']} key={i}>
                    {type === 'link' && (
                      <NavLink
                        className={styles['user-menu-link']}
                        to={`/${name}`}
                        onClick={closeUserMenu}
                      >
                        {icon}
                        <span className={styles['user-menu-title']}>
                          {title}
                        </span>
                      </NavLink>
                    )}
                    {type !== 'link' && (
                      <button
                        className={styles['user-menu-btn']}
                        type="button"
                        onClick={toggleModalClick}
                      >
                        {icon}
                        <span className={styles['user-menu-title']}>
                          {title}
                        </span>
                      </button>
                    )}
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default UserMenu;
