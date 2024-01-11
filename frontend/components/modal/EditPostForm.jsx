import React, { useState } from 'react';
import { Avatar, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EditPostForm = ({ hideModal, editPost, currentUser, post }) => {
    const [form, setForm] = useState(post);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editPost(form).then(hideModal());
        e.target.reset();
    };

    return (
        <div className="post-form">
            <form className="post-form__input__wrapper" onSubmit={handleSubmit}>
                <Avatar 
                className='post-form__input__avatar'
                src={currentUser.profilepicUrl}
                />
                <TextField
                    name='body'
                    variant='filled'
                    size='small'
                    label="How would you like to edit your post?"
                    onChange={handleChange}
                />
                <IconButton type='submit'>
                    <EditIcon />
                </IconButton>
            </form>
        </div>
    );
};

export default EditPostForm;