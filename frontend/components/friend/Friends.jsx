import React, { useEffect } from 'react';
import { Paper, Divider, InputBase, IconButton, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import HeaderContainer from '../header/HeaderContainer';
import Friend from './Friend';

const Friends = ({ currentUser, currentUserId, users, getUsers }) => {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await getUsers();
      } catch (error) {
        console.log('dispatch Users not working')
      }
    };
    fetchUsers();
  }, [getUsers]);

  let otherUsers = users.filter((user) => user.id !== currentUserId);

  return (
    <div className='friends-page'>
      <HeaderContainer />
      <div className='friends-wrapper'>
          <Paper className='friends-search__bar'component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 425 }}>
            <InputBase placeholder='Search for friends' sx={{ ml: 1, flex: 1 }}/> 
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Paper>
          <div className='friends__feed'>
            <Stack spacing={{ xs: 1.5 }} >
              {otherUsers.map((user) => (
                <Friend currentUser={currentUser} currentUserId={currentUserId} user={user} key={user.id} />
              ))}
            </Stack>
          </div>
      </div>
    </div>
  );
};

export default Friends;

