import { useDispatch } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
import Loader from '../components/Loader';
import { verify } from '../redux/auth/auth-operations';
import routes from '../routes';

const VerifyPage = () => {
  const dispatch = useDispatch();
  const path = useRouteMatch();
  if (path) {
    dispatch(verify(path.params.id));
    return <Redirect to={routes.home} />;
  }
  return <Loader />;
};

export default VerifyPage;
