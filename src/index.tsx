import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import 'semantic-ui-css/semantic.min.css';

import getRoutes from 'routes';

import setupClient from './client';
import { getToken } from 'utils/auth';

import * as serviceWorker from './serviceWorker';
dotenv.config();

ReactDOM.render(
  <ApolloProvider client={setupClient(getToken())}>
    <BrowserRouter>
      <div>{getRoutes()}</div>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
