/* global __DEVTOOLS__ */

/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

import getRoutes from './routes';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';

const client = new ApiClient();
const _browserHistory = useScroll(() => browserHistory)(); // eslint-disable-line
const dest = document.getElementById('content'); // eslint-disable-line
const store = createStore(_browserHistory, client, window.__data); // eslint-disable-line
const history = syncHistoryWithStore(_browserHistory, store);

function initSocket() {
  const socket = io('', { path: '/ws' });
  socket.on('news', (data) => {
    console.log('hello');
    socket.emit('my other event', { my: 'data from client' });
  });
  socket.on('msg', (data) => {
    console.log(data); // eslint-disable-line
  });

  return socket;
}

// global.socket = initSocket();

const component = (
  <Router
    history={history}
    render={props => (
      <ReduxAsyncConnect
        filter={item => !item.deferred}
        helpers={{ client }}
        {...props}
      />
    )}
  >
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  <Provider key="provider" store={store}>
    {component}
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // eslint-disable-line
}

if (__DEVTOOLS__ && !window.devToolsExtension) { // eslint-disable-line
  const DevTools = require('./containers/DevTools/DevTools'); // eslint-disable-line
  ReactDOM.render(
    <Provider key="provider" store={store}>
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    dest
  );
}
