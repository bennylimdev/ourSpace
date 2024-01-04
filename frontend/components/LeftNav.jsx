import React from 'react';
import { Tabs, Tab } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const LeftNav = () => {
  return (
    <Tabs value={false} className='left__nav' orientation='vertical'>
      <Tab 
        icon={<PeopleOutlineIcon />}
        iconPosition='start'
        label='My Profile'
        href='/#/profile'
      />
      <Tab 
        icon={<AccountCircleOutlinedIcon />}
        iconPosition='start'
        label='Friends'
        href='/#/friends'
      />
    </Tabs>
  );
};

export default LeftNav;