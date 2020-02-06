import React from 'react';
import PropTypes from 'prop-types';
import './OuterWrapper.css';

function OuterWrapper(props) {
  const { children } = props;

  return (
    <div className="outer-wrapper w-100">
      <div className="inner-wrapper">
        { children }
      </div>
    </div>
  );
}

OuterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OuterWrapper;
