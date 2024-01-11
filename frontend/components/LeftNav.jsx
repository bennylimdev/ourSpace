import React from 'react';
import { Tabs, Tab } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
      <Tab
        icon={<GitHubIcon />}
        iconPosition='start'
        label="Benny's Github"
        href="https://github.com/bennylimdev"
        target="_blank" 
        rel="noopener noreferrer" // prevents tabnabbing
      />
      <Tab
        icon={<LinkedInIcon />}
        iconPosition='start'
        label="Benny's Linkedin"
        href="https://www.linkedin.com/in/bennylimdev"
        target="_blank" 
        rel="noopener noreferrer"
      />
    </Tabs>
  );
};

export default LeftNav;