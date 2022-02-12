// import { Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import AppBar from './components/AppBar';
import Footer from './components/Footer';
import routes from './routes';
import { currentUser } from './redux/auth';
import { PrivateRoute, PublicRoute } from './components/RoutesHOC';
import Loader from './components/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const PortfolioPage = lazy(() =>
  import('./views/PortfolioPage' /* webpackChunkName: "portfolio-page" */),
);
const PortfolioListPage = lazy(() =>
  import(
    './views/PortfolioListPage' /* webpackChunkName: "portfolio-list-page" */
  ),
);
const VerifyPage = lazy(() =>
  import('./views/VerifyPage' /* webpackChunkName: "portfolio-list-page" */),
);
const ResendVerifyPage = lazy(() =>
  import(
    './views/ResendVerifyPage' /* webpackChunkName: "portfolio-list-page" */
  ),
);
const LogInPage = lazy(() =>
  import('./views/LogInPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPage' /* webpackChunkName: "register-page" */),
);
const OrdersPage = lazy(() =>
  import('./views/OrdersPage' /* webpackChunkName: "orders-page" */),
);
const SettingsPage = lazy(() =>
  import('./views/SettingsPage' /* webpackChunkName: "settings-page" */),
);
const forAllRoutes = [
  { path: routes.home, name: 'Home', Component: HomePage },
  {
    path: routes.contacts,
    name: 'Contacts',
    Component: ContactsPage,
  },
  {
    path: routes.portfolio,
    name: 'PortfolioList',
    Component: PortfolioListPage,
  },
  {
    path: routes.portfolioId,
    name: 'Portfolio',
    Component: PortfolioPage,
  },
  {
    path: routes.verify,
    name: 'Verify',
    Component: ResendVerifyPage,
  },
  {
    path: routes.verifyId,
    name: 'Verify',
    Component: VerifyPage,
  },
];
const limitedRoutes = [
  {
    path: routes.orders,
    name: 'Orders',
    Component: OrdersPage,
    type: 'private',
  },
  {
    path: routes.login,
    name: 'LogIn',
    Component: LogInPage,
    type: 'public',
  },
  {
    path: routes.register,
    name: 'Register',
    Component: RegisterPage,
    type: 'public',
  },
  {
    path: routes.settings,
    name: 'Settings',
    Component: SettingsPage,
    type: 'private',
  },
];

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      <AppBar />
      {forAllRoutes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={250}
              classNames="toggle-anim"
              unmountOnExit
            >
              <Component />
            </CSSTransition>
          )}
        </Route>
      ))}
      {limitedRoutes.map(({ path, Component, type }) =>
        type === 'public' ? (
          <PublicRoute key={path} exact path={path} restricted>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={250}
                classNames="toggle-anim"
                unmountOnExit
              >
                <Component />
              </CSSTransition>
            )}
          </PublicRoute>
        ) : (
          <PrivateRoute key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={250}
                classNames="toggle-anim"
                unmountOnExit
              >
                <Component />
              </CSSTransition>
            )}
          </PrivateRoute>
        ),
      )}
      <Footer />
    </Suspense>
  );
}

export default App;
