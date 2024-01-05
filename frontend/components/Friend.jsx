import React from 'react';
import { Avatar } from '@mui/material';

const Friend = ({ user }) => {
  return (
    <div className='friend-wrapper'>
      <div className='friend__avatar-wrapper'>
        <Avatar 
          src={user.profilepicUrl}
        />
        <h5>{user.first_name} {user.last_name}</h5>
      </div>
      <p>{user.bio}</p>
    </div>
  );
};

export default Friend;