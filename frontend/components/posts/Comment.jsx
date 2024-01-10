import React from 'react'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import CommentMenu from './CommentMenu';

const Comment = ({ id, authorId, first_name, last_name, body, profilepicUrl }) => {
  return (
    <div className='comment__wrapper'>
      <Link to={`/profile/${authorId}`}>
        <Avatar 
          className='comment__pic'
          src={profilepicUrl}
        />
      </Link>
      <div className='comment__content'>
        <Link className='comment-link' to={`/profile/${authorId}`}>
          <p className='comment__author'>{first_name} {last_name}</p>
        </Link>
        <p>{body}</p>
      </div>
      <div className='comment__menu'>
        <CommentMenu />
      </div>
      <div className='comment__btns'> 
      </div>
    </div>
  );
};

export default Comment;