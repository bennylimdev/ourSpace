import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

class Post extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='post'>
                <div className='post__header'>
                    <h5>Author 10 hours ago</h5>
                </div>
                <div className='post__content'>
                    <p>Dam today was not fun</p>
                </div>
                <div className='post__buttons'>
                    <div className='post__button'>
                        <FavoriteBorderIcon />
                    </div>
                    <div className='post__button'>
                        <ChatBubbleOutlineIcon />
                    </div>
                </div>
                <div className='comment__form'>
                    <input 
                    className="comment__input"
                    type='text'
                    placeholder="Write a comment..."
                    />
                </div>
            </div>
        );
    };
};

export default Post;