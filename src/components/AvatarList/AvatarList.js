import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import './AvatarList.scss';


export default function AvatarList({
  avatars,
  onAvatarSelect,
  selectedAvatar,
  isLoading,
  loadingAvatar,
}) {
  return (
    <div>
      <h3 className="text-center choose-avatar-header">Choose your avatar</h3>
      <ul className="avatar-list">
        {avatars.map((avatar) => (
          <li key={avatar.id}>
            {isLoading && loadingAvatar === avatar && (
              <div className="loading-spinner" />
            )}
            <Avatar
              className={selectedAvatar === avatar ? 'active' : ''}
              onClick={() => onAvatarSelect(avatar)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  onAvatarSelect(avatar);
                }
              }}
              avatar={avatar}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}


AvatarList.propTypes = {
  avatars: PropTypes.array.isRequired,
};