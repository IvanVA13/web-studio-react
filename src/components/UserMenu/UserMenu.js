import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegRegistered, FaClipboardList } from 'react-icons/fa';
import { FiLogIn, FiSettings } from 'react-icons/fi';
import { ImExit } from 'react-icons/im';

import { logout } from '../../redux/auth';
import styles from './UserMenu.module.scss';
import Container from '../Wrappers/Container';
import { getIsAuthenticated } from '../../redux/auth';

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
  const isLogIn = useSelector(getIsAuthenticated);
  const dispatch = useDispatch();
  const handleClick = e => {
    if (e.currentTarget.getAttribute('act') === 'logout') {
      dispatch(logout());
    }
    closeUserMenu();
  };
  return (
    <Container type="no-click">
      <div className={styles['user-menu']}>
        <ul className={styles['user-menu-list']}>
          {userMenuData
            .filter(
              item =>
                (item.route === 'public' && !isLogIn) ||
                (item.route === 'private' && isLogIn),
            )
            .map(({ name, icon, title, type }, i) => {
              return (
                <li
                  act={name}
                  className={styles['user-menu-item']}
                  key={i}
                  onClick={handleClick}
                >
                  {type === 'link' && (
                    <NavLink
                      className={styles['user-menu-link']}
                      to={`/${name}`}
                    >
                      {icon}
                      <span className={styles['user-menu-title']}>{title}</span>
                    </NavLink>
                  )}
                  {type !== 'link' && (
                    <button className={styles['user-menu-btn']} type="button">
                      {icon}
                      <span className={styles['user-menu-title']}>{title}</span>
                    </button>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </Container>
  );
};

export default UserMenu;
