import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';

import HeaderContainer from '../header/HeaderContainer';
import PostFormContainer from '../posts/PostFormContainer';
import ProfilePictureContainer from './ProfilePictureContainer';
import NewsFeed from './../NewsFeed';
import ProfileFriend from './ProfileFriend';

const Profile = ({ getComments, allComments, getPostlikes, allPostlikes, getUser, currentUserId, users, edituser }) => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await Promise.all([getComments(), getPostlikes(), getUser(currentUserId)]);
      } catch (error) {
        console.log('dispatch not working')
      }
    };
    fetchUser();
    fetchUser();
  }, []);

  let userProfile = null;
  let posts = [];
  let profilepicUrl = '';
  let bio = '';
  let friends = [];

  if(users[currentUserId]){
    userProfile = users[currentUserId];
    profilepicUrl = userProfile.profilepicUrl;
    posts = Object.values(userProfile.posts);
    friends = userProfile.friends;
    bio = userProfile.bio;
  };

  return (
    <div className='profile-page'>
      <HeaderContainer />
      <div className='profile'>
        <div className='profile-left'>
          <div className='profile-info'>
            <div className='profile-pic'>
                <ProfilePictureContainer profilepicUrl={profilepicUrl}/>
            </div>
            <div className='profile-bio'>
              <p>{bio}</p>
            </div>
          </div>  
          <div className='friends__list'>
            <h3>Friends</h3>
            <p>{friends.length} friend (s)</p>
            <Stack spacing={{ xs: 1.5 }} >
              {friends.map((user) => (
                <ProfileFriend user={user} key={user.id} />
              ))}
            </Stack>
          </div>
        </div>
        <div className='profile-right'>
          <PostFormContainer />
          <NewsFeed posts={posts} comments={allComments} postlikes={allPostlikes}/>
        </div>
      </div>
    </div>
  );
};

export default Profile;