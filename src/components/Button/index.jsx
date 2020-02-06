import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const { text } = props;

  return (
    <button type="submit" className="custom">{ text }</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;