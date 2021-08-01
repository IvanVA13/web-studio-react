import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import Navigation from '../Navigation';
// import UserMenu from '../UserMenu';
import routes from '../../routes';

const AppBar = () => {
  return (
    <>
      <Link to={routes.home}>Logo</Link> <Navigation />
    </>
  );
};
export default AppBar;
