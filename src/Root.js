import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';

class Root extends Component {
  render () {
    const { store, history } = this.props;
    if (!this.routeConfig) this.routeConfig = routes; // hot-loader router error fix
    return (
      <Provider store={store}>
        <Router history={history} routes={this.routeConfig} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
