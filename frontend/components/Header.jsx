import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Avatar } from '@mui/material';

function Header({}) {
    return (
        <div className='header'>
            <h3 className='header__start'>o(S)</h3>
            <div className='header__nav'>
                <div>
                    <HomeOutlinedIcon fontSize='large'/>
                </div>
                <div>
                    <PersonAddAltOutlinedIcon fontSize='large'/>
                </div>
                <div>
                    <AccountCircleOutlinedIcon fontSize='large'/>
                </div>
            </div>
            <Avatar className='header__end'>BL</Avatar>
        </div>
    );
};

export default Header;