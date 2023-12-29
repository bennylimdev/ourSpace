import React from 'react';
import { Avatar } from '@mui/material';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
    };
    //on click modal comes out
    render() {
        return (
            <div className="post-form">
                <div className="post-form__input__wrapper">
                    <Avatar className='post-form__input__avatar'>BL</Avatar>
                    <input 
                    className="post-input"
                    type='text'
                    placeholder="What's on your mind?"
                    />
                </div>
            </div>
        );
    };
};

export default PostForm;