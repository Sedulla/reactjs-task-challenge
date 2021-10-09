import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import onClickOutside from 'react-onclickoutside';
import Avatar from '../Avatar/Avatar';
import AvatarList from '../AvatarList/AvatarList';
import Popover from '../Popover/Popover';
import './AvatarPicker.scss';

function AvatarPicker(props) {
  const [selectedAvatar, setSelectedAvatar] = useState(props.avatars[0]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingAvatar, setLoadingAvatar] = useState(null);

  Avatar.handleClickOutside = () => closePopover();

  const togglePopover = () => {
    if (!isPopoverOpen) {
      openPopover();
    } else {
      closePopover();
    }
  };

  const openPopover = () => {
    setIsPopoverOpen(true);
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
  };

  const onAvatarSelect = (selectedAvatar) => {
    if (setSelectedAvatar === selectedAvatar) {
      return;
    }
    setIsLoading(true);
    setLoadingAvatar(selectedAvatar);

    setTimeout(() => {
      setIsPopoverOpen(false);
      setSelectedAvatar(selectedAvatar);
      setIsLoading(false);
      setLoadingAvatar(null);
    }, 1000);
  };

  return (
    <div className="avatar-picker">
      <div className="header text-center">
        <Avatar
          onClick={togglePopover}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              togglePopover();
            }
          }}
          className={`selected-avatar ${isPopoverOpen ? 'active' : ''}`}
          avatar={selectedAvatar}
        />
      </div>
      <Animated
        animationIn="bounceIn"
        animationOut="zoomOut"
        isVisible={isPopoverOpen}
        animateOnMount={false}
      >
        <Popover>
          <AvatarList
            avatars={props.avatars}
            onAvatarSelect={onAvatarSelect}
            selectedAvatar={selectedAvatar}
            isLoading={isLoading}
            loadingAvatar={loadingAvatar}
          />
        </Popover>
      </Animated>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Avatar.handleClickOutside,
};

export default onClickOutside(AvatarPicker, clickOutsideConfig);
