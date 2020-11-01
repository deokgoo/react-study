import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes';
import { Provider } from "react-redux";
import store from "./redux/store";
import OidcProvider from './components/requireAuth/OidcProvider';
import userManager from './utils/userManager';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <Root />
      </OidcProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
