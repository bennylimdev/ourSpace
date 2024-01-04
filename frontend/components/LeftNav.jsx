import React from 'react';
import { Tabs, Tab } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

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
      <Tab 
        icon={<LogoutIcon />}
        iconPosition='start'
        label='Logout'
        />
    </Tabs>
  )
}

export default LeftNav