import React, { useState, useEffect } from 'react';
import { Button, Box, Avatar } from '@mui/material/';

const ProfileForm = ({ editUser, user }) => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [form, setForm] = useState(user);

    return (
        <div className='ProfileForm'>
            <Box m={2}>
                <Avatar
                    alt='default-picture'
                    sx={{ width: 250, height: 250}}
                    src=''
                />
            </Box>
            <input 
                accept='image/*'
                type='file'
                id='select-avatar'
                style={{ display: 'none' }}
            />
            <label htmlFor='select-avatar'>
                <Button variant='contained' color='primary' component='span'>
                    Upload Picture
                </Button>
            </label>
        </div>
    );
};  

export default ProfileForm;