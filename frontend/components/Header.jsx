import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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
            <h3 className='header__end'>Userpic</h3>
        </div>
    );
};

export default Header;