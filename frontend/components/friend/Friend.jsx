import React from 'react';
import { Avatar } from '@mui/material';
import InvitationButton from './InvitationButton';

const Friend = ({ currentUser, currentUserId, user, sendFriendReq }) => {
  console.log(sendFriendReq);
  
  return (
    <div className='friend-wrapper'>
      <div className='friend__avatar-wrapper'>
        <Avatar 
          src={user.profilepicUrl}
        />
        <h5>{user.first_name} {user.last_name}</h5>
      </div>
      <p>{user.bio}</p>
      <InvitationButton currentUser={currentUser} userId={user.id} currentUserId={currentUserId} />
    </div>
  );
};

export default Friend;