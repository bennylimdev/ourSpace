import React from 'react';
import Header from './Header';
import PostForm from './posts/PostForm';
import { Avatar } from '@mui/material';
import NewsFeed from './NewsFeed';

const Profile = () => {
    return (
        <div className='profile-page'>
            <Header />
            <div className='profile'>
                <div className='profile-pic'>
                    <Avatar sx={{ width: 180, height: 180 }}> BL </Avatar>
                </div>
                <div className='profile-bio'>
                    <p> I Love pie </p>
                </div>
                <div className='friends-list'>
                </div>
                <PostForm />
                <NewsFeed posts={[]} comments={[]}/>
            </div>
        </div>
    );
};

export default Profile;