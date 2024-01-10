import React, { useEffect } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { blue } from '@mui/material/colors';
import { Avatar, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

function Header({ logOut, currentUser, getUsers }) {
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            await getUsers();
          } catch (error) {
            console.log('dispatch not working')
          }
        };
        fetchUsers();
      }, []);

    const handleClick = () => {
        logOut(currentUser.id)
    };
  
    return (
      <div className='header'>
          <h3 className='header__start'>o(S)</h3>
          <Tabs value={false} className='header__nav'>
              <Tab href='/#/home'icon={<HomeOutlinedIcon fontSize='large' />} />
              <Tab href='/#/friends' icon={<PersonAddAltOutlinedIcon fontSize='large' />} />
              <Tab href={`/#/profile/${currentUser.id}`} icon={<AccountCircleOutlinedIcon fontSize='large' />} />
          </Tabs>
          <div className='header__end'>
              <Avatar sx={{ bgcolor: blue[900] }}>
                  <LogoutIcon onClick={handleClick}/>
              </Avatar>
              <Link to={`/profile/${currentUser.id}`}>
                <Avatar sx={{ bgcolor: blue[800] }} src={currentUser.profilepicUrl}/>
              </Link>
          </div>
      </div>
    );
};

export default Header;