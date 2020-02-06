import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu(props) {
  const { image, title, link } = props;

  return (
    <Link to={link}>
      <div className="menu-wrapper">
        <img src={image} alt="" />
        <div className="menu-title">{title}</div>
      </div>
    </Link>
  );
}

Menu.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Menu;