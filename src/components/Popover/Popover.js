import React from 'react';
import './Popover.scss';

export default function Popover(props) {
  return <div className="popover-box">{props.children}</div>;
}
