// import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import MenuMob from '../MenuMob';
import Navigation from '../Navigation';
import Contacts from '../Contacts';
// import UserMenu from '../UserMenu';
import routes from '../../routes';

const AppBar = () => {
  return (
    <header class="header">
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
      </ul>
    </header>
  );
};
export default AppBar;
