import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import history from './services/history';

import './config/ReactotronConfig';

import Routes from './routes';
import GlobalStyles from './styles/global';

import { store, persistor } from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Router history={history}>
              <Routes />
            </Router>
            <GlobalStyles />
            <ToastContainer autoClose={3000} />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
