import { Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
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
// const LogInPage = lazy(() =>
//   import('./views/LogInPage' /* webpackChunkName: "login-page" */),
// );
// const RegisterPage = lazy(() =>
//   import('./views/RegisterPage' /* webpackChunkName: "register-page" */),
// );
const OrdersPage = lazy(() =>
  import('./views/OrdersPage' /* webpackChunkName: "orders-page" */),
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AppBar />
      <Switch>
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
        {/* <PublicRoute path={routes.logIn} restricted>
          <LogInPage />
          </PublicRoute>
          <PublicRoute path={routes.register} restricted>
          <RegisterPage />
        </PublicRoute> */}
        <PrivateRoute path={routes.orders}>
          <OrdersPage />
        </PrivateRoute>
      </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
