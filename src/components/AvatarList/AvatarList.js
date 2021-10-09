import React from 'react';
import Avatar from '../Avatar/Avatar';

export default function AvatarList(props) {
  return (
    <div>
      <h3 className="text-center choose-avatar-header">Choose your avatar</h3>
      <ul className="avatar-list">
        {props.avatars.map((avatar) => (
          <li key={avatar.id}>
            {props.isLoading && props.loadingAvatar === avatar && (
              <div className="loading-spinner"></div>
            )}
            <Avatar
              className={props.selectedAvatar === avatar ? 'active' : ''}
              onClick={() => props.onAvatarSelect(avatar)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  props.onAvatarSelect(avatar);
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
