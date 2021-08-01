import { Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

import AppBar from './components/AppBar';
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
        <PublicRoute path={routes.portfolio}>
          <PortfolioPage />
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
    </Suspense>
  );
}

export default App;
