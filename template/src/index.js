import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'store/redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'translations/i18next';

import App from './App';

import 'assets/styles/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </I18nextProvider>
  </Provider>,
);
