import React from 'react'
import { Avatar } from '@mui/material';

const Comment = ({ first_name, last_name, body }) => {
  return (
    <div className='comment__wrapper'>
        <Avatar className='comment__pic'> BL </Avatar>
        <div className='comment__content'>
            <p className='comment__author'>{first_name} {last_name}</p>
            <p>{body}</p>
        </div>
        <div className='comment__btns'> 
            <p>Comment</p>
        </div>
    </div>
  );
};

export default Comment;