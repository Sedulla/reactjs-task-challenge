import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.scss';



export default function Avatar({ className, onClick, onKeyDown, avatar }) {
  return (
    <div
      className={`avatar-container ${className || ''}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex="0"
    >
      <img src={avatar.src} alt={avatar.label} />
      <div className="overlay" />
    </div>
  );
}

Avatar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};
