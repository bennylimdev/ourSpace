import React from 'react';
import { Tabs, Tab } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const LeftNav = ({ currentUserId }) => {
  return (
    <Tabs value={false} className='left__nav' orientation='vertical'>
      <Tab 
        icon={<AccountCircleOutlinedIcon />}
        iconPosition='start'
        label='My Profile'
        href={`/#/profile/${currentUserId}`}
      />
      <Tab 
        icon={<PersonAddAltOutlinedIcon />}
        iconPosition='start'
        label='Add Friends'
        href='/#/friends'
      />
    </Tabs>
  );
};

export default LeftNav;