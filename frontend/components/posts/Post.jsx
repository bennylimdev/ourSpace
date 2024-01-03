import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, ButtonGroup, Button, TextField, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';

import Comment from './Comment';

const Post = ({ first_name, last_name, body, createComment, comment, comments, id }) => {
    const [form, setForm] = useState(comment);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createComment(form);
    };
    
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar sx={{ width: 24, height: 24 }}>B</Avatar>
                <h5>{first_name} {last_name}</h5>
            </div>
            <div className='post__content'>
                <p>{body}</p>
            </div>
            <ButtonGroup variant='contained' className='post__btns'>
                <Button variant='outlined' startIcon={<FavoriteBorderIcon />} className='like-btn' >
                    Like
                </Button>
                <Button startIcon={<ChatBubbleOutlineIcon />} className='comment-btn'>
                    Comment
                </Button>            
            </ButtonGroup>
            <div className='post__comments-container'>
                <div className='comment__feed'>
                <Stack spacing={{ xs: 1 }} >
                {comments.filter((comment) => (comment.post_id === id)).map((comment) => (
                    <Comment key={comment.id} id={comment.id} first_name={comment.first_name} last_name={comment.last_name} body={comment.body}/>
                ))}
                </Stack>
            </div>
            <form className='comment__form' onSubmit={handleSubmit}>
                <Avatar sx={{ width: 30, height: 30 }} className='.comment-form__input__avatar'>BL</Avatar>
                <TextField
                    name='body'
                    variant='filled' 
                    size='small'
                    label="Leave a comment"
                    onChange={handleChange}
                />
                <IconButton type='submit'>
                    <SendIcon />
                </IconButton>
            </form>
            </div>
        </div>
    );
};

export default Post;