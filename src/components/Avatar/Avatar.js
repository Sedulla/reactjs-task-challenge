import React from 'react';
import './Avatar.scss';

export default function Avatar(props) {
  return (
    <div
      className={`avatar-container ${props.className || ''}`}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      tabIndex="0"
    >
      <img src={props.avatar.src} alt={props.avatar.label} />
      <div className="overlay" />
    </div>
  );
}
