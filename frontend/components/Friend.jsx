import React from 'react';

const Friend = ({ user }) => {
  return (
    <div className='friend-wrapper'>
        <h5>{user.first_name} {user.last_name}</h5>
        <p>{user.bio}</p>
    </div>
  );
};

export default Friend;