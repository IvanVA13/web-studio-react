import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegRegistered, FaClipboardList } from 'react-icons/fa';
import { FiLogIn, FiSettings } from 'react-icons/fi';
import { ImExit } from 'react-icons/im';
import styles from './UserMenu.module.scss';

const userMenuData = [
  {
    name: 'register',
    icon: <FaRegRegistered className={styles['user-menu-icon']} />,
    title: 'Регистрация',
    type: 'link',
  },
  {
    name: 'login',
    icon: <FiLogIn className={styles['user-menu-icon']} />,
    title: 'Вход',
    type: 'link',
  },
  {
    name: 'logout',
    icon: <ImExit className={styles['user-menu-icon']} />,
    title: 'Выход',
    type: 'act',
  },
  {
    name: 'orders',
    icon: <FaClipboardList className={styles['user-menu-icon']} />,
    title: 'Заказы',
    type: 'link',
  },
  {
    name: 'settings',
    icon: <FiSettings className={styles['user-menu-icon']} />,
    title: 'Настройки аккаунта',
    type: 'link',
  },
];

const UserMenu = ({ closeUserMenu }) => {
  const handleClick = e => {
    e.preventDefault();
    console.log(e.currentTarget.getAttribute('act'));
  };
  return (
    <div className={styles['user-menu']}>
      <ul className={styles['user-menu-list']}>
        {userMenuData.map(({ name, icon, title, type }, i) => {
          if (type === 'link') {
            return (
              <li
                className={styles['user-menu-item']}
                key={i}
                onClick={closeUserMenu}
              >
                <NavLink className={styles['user-menu-link']} to={`/${name}`}>
                  {icon}
                  <span className={styles['user-menu-title']}>{title}</span>
                </NavLink>
              </li>
            );
          } else {
            return (
              <li
                className={styles['user-menu-item']}
                key={i}
                onClick={closeUserMenu}
              >
                <button
                  act={name}
                  className={styles['user-menu-btn']}
                  onClick={handleClick}
                  type="button"
                >
                  {icon}
                  <span className={styles['user-menu-title']}>{title}</span>
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default UserMenu;
