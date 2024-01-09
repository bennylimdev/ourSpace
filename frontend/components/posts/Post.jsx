import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, ButtonGroup, Button, TextField, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';

import Comment from './Comment';
import EditMenu from './EditMenu';

const Post = ({ authorId, deletePost, currentUser, profilepicUrl, first_name, last_name, body, createComment, comment, comments, createPostlike, deletePostlike, postlike, postlikes, id }) => {
    const [form, setForm] = useState(comment);
    const [editMenu, setEditMenu] = useState(null);

    useEffect(() => {
        if(currentUser.id === authorId) {
            setEditMenu(<EditMenu />);
        } else {
            setEditMenu(null);
        }
    }, []);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createComment(form);
        e.target.reset();
    };

    //fix user auth to pass in user id from state instead when ready
    
    let currentPostlikes = postlikes.filter((postlike) => (postlike.post_id === id));
    let currentUserliked = currentPostlikes.filter((postlike) => postlike.author_id === comment.author_id);

    const handlePostlike = () => {
        if(currentUserliked.length === 0) {
            createPostlike(postlike);
        } else {
            deletePostlike(currentUserliked.shift().id);
        }
    };
    
    let postlikeCounter = currentPostlikes.length;
    let commentCounter = comments.filter((comment) => (comment.post_id === id)).length;

    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar 
                    sx={{ width: 24, height: 24 }} 
                    src={profilepicUrl}
                    />
                <h5>{first_name} {last_name}</h5>
                <div className='post__menu'>
                    {editMenu}
                </div>
            </div>
            <div className='post__content'>
                <p>{body}</p>
            </div>
            <div className='posts__counter-wrapper'>
                <div className='posts__like-counter'>
                    <p>{postlikeCounter} like (s)</p>
                </div>
                <div className='posts__comment-counter'> 
                    <p>{commentCounter} comment (s)</p>
                </div>
            </div>
            <ButtonGroup variant='contained' className='post__btns'>
                <Button onClick={handlePostlike} variant='text' startIcon={<FavoriteBorderIcon />} className='like-btn' >
                    Like
                </Button>         
            </ButtonGroup>
            <div className='post__comments-container'>
                <div className='comment__feed'>
                <Stack spacing={{ xs: 0.9 }} >
                {comments.filter((comment) => (comment.post_id === id)).map((comment) => (
                    <Comment key={comment.id} profilepicUrl={comment.profilepicUrl} id={comment.id} first_name={comment.first_name} last_name={comment.last_name} body={comment.body}/>
                ))}
                </Stack>
            </div>
            <form className='comment__form' onSubmit={handleSubmit}>
                <Avatar 
                sx={{ width: 30, height: 30 }} 
                className='.comment-form__input__avatar'
                src={currentUser.profilepicUrl}
                />
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