import React from 'react';
import avatars from './data/avatars';
import AvatarPicker from './components/AvatarPicker/AvatarPicker';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <AvatarPicker avatars={avatars} />
    </div>
  );
}
