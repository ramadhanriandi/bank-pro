import React from 'react';
import PropTypes from 'prop-types';
import './NonNavbarWrapper.css';

function NonNavbarWrapper(props) {
  const { children } = props;

  return (
    <div className="login-wrapper w-100">
      <div className="login-box">
        { children }
      </div>
    </div>
  );
}

NonNavbarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NonNavbarWrapper;
