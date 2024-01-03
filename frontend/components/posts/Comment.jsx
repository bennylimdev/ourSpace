import React from 'react'
import { Avatar, ButtonGroup, Button } from '@mui/material';

const Comment = ({ first_name, last_name, body }) => {
  return (
    <div className='comment__wrapper'>
        <Avatar className='comment__pic'> BL </Avatar>
        <div className='comment__content'>
            <p>{first_name} {last_name}</p>
            <p>{body}</p>
        </div>
        <div className='comment__btns'> 
            <p>Like</p> 
            <p>Comment</p>
        </div>
    </div>
  );
};

export default Comment;