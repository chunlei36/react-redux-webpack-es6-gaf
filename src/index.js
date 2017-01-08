import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer as HotLoaderAppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './Root';
// import './styles/main.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// 挂载在index.html的root
const mountNode = document.querySelector('#root');

render(
  <HotLoaderAppContainer>
    <Root store={store} history={history} />
  </HotLoaderAppContainer>,
  mountNode
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp = require('./Root').default;
    render(
      <HotLoaderAppContainer>
        <NextApp store={store} history={history} />
      </HotLoaderAppContainer>,
      mountNode
    );
  });
}
