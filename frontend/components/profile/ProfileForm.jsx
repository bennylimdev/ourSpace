import React, { useState, useEffect } from 'react';
import { Button, Box, Avatar } from '@mui/material/';

const ProfileForm = ({ editUser, profilepicUrl}) => {

    const handleChange = (e) => {
        e.preventDefault;

        const form = new FormData();

        let file = e.currentTarget.files[0];

        form.append('user[id]', 2);
        form.append('user[profile_pic]', file);

        editUser(form);
    };

    return (
        <div className='profileform'>
            <Box m={2}>
                <Avatar
                    alt='default-picture'
                    sx={{ width: 250, height: 250}}
                    src={profilepicUrl}
                />
            </Box>
            <input 
                accept='image/*'
                type='file'
                id='select-avatar'
                style={{ display: 'none' }}
                onChange={handleChange}
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