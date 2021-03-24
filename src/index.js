import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import Theme from './components/Theme';
import Routes from './components/Routes';

import store from './redux/store';

import './assets/styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <Routes />
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
