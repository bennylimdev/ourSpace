import React from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const ProfileFriend = ({ user }) => {
  return (
    <div className='friend-wrapper'>
      <div className='friend__avatar-wrapper'>
        <Link to={`/profile/${user.id}`}>
          <Avatar 
            src={user.profilepicUrl}
          />
        </Link>
        <Link className='comment-link' to={`/profile/${user.id}`}>
          <h5>{user.first_name} {user.last_name}</h5>
        </Link>
      </div>
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfileFriend;