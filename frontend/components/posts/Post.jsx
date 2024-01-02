import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, ButtonGroup, Button, TextField, IconButton } from '@mui/material';

const Post = ({ first_name, last_name, body }) => {
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
            <div className='comment__form'>
                <Avatar sx={{ width: 30, height: 30 }} className='.comment-form__input__avatar'>BL</Avatar>
                <TextField 
                    variant='filled' 
                    size='small'
                    label="Leave a comment"
                />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Post;