import React from 'react';
import PropTypes from 'prop-types';
import './InnerWrapper.css';

function InnerWrapper(props) {
  const { children } = props;

  return (
    <div className="wrapper w-100">
      { children }
    </div>
  );
}

InnerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InnerWrapper;
