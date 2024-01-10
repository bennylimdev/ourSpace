import React, { useState, useEffect } from 'react'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import CommentMenu from './CommentMenu';

const Comment = ({ deleteComment, currentUserId, id, authorId, first_name, last_name, body, profilepicUrl }) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    if(currentUserId === authorId) {
        setMenu(<CommentMenu deleteComment={deleteComment} commentId={id} />);
    } else {
        setMenu(null);
    }
  }, []);

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
        {menu}
      </div>
      <div className='comment__btns'> 
      </div>
    </div>
  );
};

export default Comment;