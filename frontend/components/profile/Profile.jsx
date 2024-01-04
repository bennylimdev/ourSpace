import React, { useEffect } from 'react';
import HeaderContainer from '../header/HeaderContainer';
import PostFormContainer from '../posts/PostFormContainer';
import { Avatar } from '@mui/material';
import NewsFeed from '../NewsFeed';

const Profile = ({ getComments, allComments, getPosts, allPosts, getPostlikes, allPostlikes }) => {
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          await Promise.all([getComments(), getPosts(), getPostlikes()]);
        } catch (error) {
          console.log('dispatch not working')
        }
      };
      fetchPosts();
    }, [getPosts]);

    return (
      <div className='profile-page'>
        <HeaderContainer />
        <div className='profile'>
          <div className='profile-left'>
            <div className='profile-info'>
              <div className='profile-pic'>
                  <Avatar sx={{ width: 180, height: 180 }}> BL </Avatar>
              </div>
              <div className='profile-bio'>
              <p> I Love pie </p>
              </div>
            </div>  
            <div className='friends-list'>

            </div>
          </div>
          <div className='profile-right'>
            <PostFormContainer />
            <NewsFeed posts={allPosts} comments={allComments} postlikes={allPostlikes}/>
          </div>
        </div>
      </div>
    );
};

export default Profile;