import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { sendFriendReq, updateFriendStatus } from '../../util/friendrequest_util';

const InvitationButton = ({ currentUser, currentUserId, userId }) => {
  // Simulating the user's friend status
  const [isFriend, setIsFriend] = useState(false);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [isRequestReceived, setIsRequestReceived] = useState(false);

  let currentUserFriend = currentUser.friends.filter((friend) => friend.id === userId);
  let currentUserFriendReqs = currentUser.friendrequests;
  let requestSent = currentUserFriendReqs.filter((friendrequest) => friendrequest.friend_id === userId);
  let currentUserReceivedReqs = currentUser.pending_friendrequests;
  let requestReceived = currentUserReceivedReqs.filter((friendrequest) => friendrequest.user_id === userId);

  console.log(currentUserFriend);
  useEffect(() => {
    if(currentUserFriend.length !== 0){
      setIsFriend(true);
    }

    if(requestSent.length !== 0){
      setIsRequestSent(true);
    }
    
    if(requestReceived.length !== 0) {
      setIsRequestReceived(true);
    }
  }, []);

  let ids = {id1: currentUserId, id2: userId};
  console.log(isRequestReceived);
  const handleButtonClick = () => {
    if (isFriend) {
      // Logic to handle the case where the user is already a friend
    } else if (isRequestReceived) {
      updateFriendStatus(requestReceived[0].id);
      setIsFriend(true);
    } else {
      sendFriendReq(ids);
      setIsRequestSent(true);
    }
  };

  let btnValue = '';

  if(isFriend){ 
    btnValue = 'Already Friends';
  } else if(isRequestSent) {
    btnValue = 'Request Sent';
  } else if(isRequestReceived) {
    btnValue = 'Accept Friend Request';
  } else { 
    btnValue = 'Add Friend';
  };

  return (
    <div className='friend__req-btn'>
      <Button
        size='small'
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        disabled={isFriend || isRequestSent}
      >
        {btnValue}
      </Button>
    </div>
  );
};

export default InvitationButton;
