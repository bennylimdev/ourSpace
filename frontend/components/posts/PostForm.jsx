import React, { useState } from 'react';
import { Avatar, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const PostForm = ({ createPost, post }) => {
    const [form, setForm] = useState(post);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(form);
        e.target.reset();
    };

    return (
        <div className="post-form">
            <form className="post-form__input__wrapper" onSubmit={handleSubmit}>
                <Avatar className='post-form__input__avatar'>BL</Avatar>
                <TextField
                    name='body'
                    variant='filled'
                    size='small'
                    label="What's on your mind?"
                    onChange={handleChange}
                />
                <IconButton type='submit'>
                    <SendIcon />
                </IconButton>
            </form>
        </div>
    );
};

export default PostForm;