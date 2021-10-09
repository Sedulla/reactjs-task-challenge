import React from 'react';
import { mount } from 'enzyme';
import AvatarPicker from '../components/AvatarPicker/AvatarPicker';
import avatars from '../data/avatars';

describe('AvatarPicker', () => {
  let props;
  let mountedAvatarPicker;
  const avatarPicker = () => {
    if (!mountedAvatarPicker) {
      mountedAvatarPicker = mount(<AvatarPicker {...props} />);
    }
    return mountedAvatarPicker;
  };

  beforeEach(() => {
    props = {
      avatars: avatars,
    };
    mountedAvatarPicker = undefined;
  });

  it('renders all avatars', () => {
    const avatars = avatarPicker().find('img');
    expect(avatars.length).toBeGreaterThan(avatars.length);
  });

  it('has one selectedAvatar', () => {
    const avatars = avatarPicker().find('Avatar.selected-avatar');
    expect(avatars.length).toBe(1);
  });
});
