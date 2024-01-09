import React from 'react'
import { Avatar } from '@mui/material';

const Comment = ({ first_name, last_name, body, profilepicUrl }) => {
  return (
    <div className='comment__wrapper'>
        <Avatar 
          className='comment__pic'
          src={profilepicUrl}
        />
        <div className='comment__content'>
            <p className='comment__author'>{first_name} {last_name}</p>
            <p>{body}</p>
        </div>
        <div className='comment__btns'> 
        </div>
    </div>
  );
};

export default Comment;