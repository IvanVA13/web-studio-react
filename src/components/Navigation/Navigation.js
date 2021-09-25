import { NavLink } from 'react-router-dom';

import routes from '../../routes';

const Navigation = () => {
  return (
    <nav className="site-nav">
      <ul className="site-nav__list">
        <li className="site-nav__item">
          <NavLink
            exact
            className="site-nav__link"
            activeClassName="site-nav__link--current"
            to={routes.home}
          >
            Студия
          </NavLink>
        </li>
        <li className="site-nav__item">
          <NavLink
            className="site-nav__link"
            activeClassName="site-nav__link--current"
            to={routes.portfolio}
          >
            Портфолио
          </NavLink>
        </li>
        <li className="site-nav__item">
          <NavLink
            className="site-nav__link"
            activeClassName="site-nav__link--current"
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

/* <li className="site-nav__item"><Link className="site-nav__link"to={routes.register}>Регистрация</Link>
        <li className="site-nav__item"><Link className="site-nav__link"to={routes.logIn}>Вход</Link>
        <li className="site-nav__item"><Link className="site-nav__link"to={routes.orders}>Заказы</Link> */
