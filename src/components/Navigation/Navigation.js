import { Link } from 'react-router-dom';

import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <Link to={routes.home}>Студия</Link>
      <Link to={routes.portfolio}>Портфолио</Link>
      <Link to={routes.contacts}>Контакты</Link>
      {/* <Link to={routes.register}>Регистрация</Link>
      <Link to={routes.logIn}>Вход</Link> */}
      <Link to={routes.orders}>Заказы</Link>
    </nav>
  );
};

export default Navigation;
