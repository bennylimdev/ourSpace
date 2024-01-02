import React from 'react'
import { Avatar, ButtonGroup, Button } from '@mui/material';

const Comment = ({ first_name, last_name, body }) => {
  return (
    <div className='comment__wrapper'>
        <Avatar> BL </Avatar>
        <div className='comment__content'>
            <h5>{first_name} {last_name}</h5>
            <p>{body}</p>
        </div>
        <div className='comment__btns'> 
            <ButtonGroup>
                <Button>Like</Button>
                <Button>Comment</Button>
            </ButtonGroup>
        </div>
    </div>
  );
};

export default Comment;