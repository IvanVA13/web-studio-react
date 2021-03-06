import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './redux/store';
import routes from './routes';
import 'modern-normalize/modern-normalize.css';
import './sass/styles.scss';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store.store}>
    <PersistGate persistor={store.persistor}>
      <BrowserRouter basename={routes.basename}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  // </React.StrictMode >
  document.getElementById('root'),
);
