import React, { PropTypes } from 'react';

const AppContainer = ({ children }) => (
  <div>
    <h1>AppContainer</h1>
    {children}
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppContainer;
