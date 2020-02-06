import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

function Label(props) {
  const { htmlFor, children } = props;

  return (
    <label className="label" htmlFor={htmlFor}>{ children }</label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;
