// import { Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

import AppBar from './components/AppBar';
import Footer from './components/Footer';
import routes from './routes';
// import { getCurrentUser } from './redux/auth';
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

const routes2 = [
  { path: routes.home, name: 'Home', Component: HomePage, type: 'public' },
  {
    path: routes.contacts,
    name: 'Contacts',
    Component: ContactsPage,
    type: 'public',
  },
  {
    path: routes.portfolio,
    name: 'PortfolioList',
    Component: PortfolioListPage,
    type: 'public',
  },
  {
    path: routes.portfolioId,
    name: 'Portfolio',
    Component: PortfolioPage,
    type: 'public',
  },
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
  return (
    <Suspense fallback={<Loader />}>
      <AppBar />

      {/* <Switch>
        <PublicRoute exact path={routes.home}>
          <HomePage />
        </PublicRoute>
        <PublicRoute path={`${routes.portfolio}/:id`}>
          <PortfolioPage />
        </PublicRoute>
        <PublicRoute path={routes.portfolio}>
          <PortfolioListPage />
        </PublicRoute>
        <PublicRoute path={routes.contacts}>
          <ContactsPage />
        </PublicRoute>
        <PublicRoute path={routes.login} restricted>
          <LogInPage />
        </PublicRoute>
        <PublicRoute path={routes.register} restricted>
          <RegisterPage />
        </PublicRoute>
        <PrivateRoute path={routes.settings}>
          <SettingsPage />
        </PrivateRoute>
        <PrivateRoute path={routes.orders}>
          <OrdersPage />
        </PrivateRoute>
      </Switch> */}
      {routes2.map(({ path, Component, type }) =>
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
