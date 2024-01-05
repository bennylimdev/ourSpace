import React, { useEffect, useState } from 'react';
import HeaderContainer from '../header/HeaderContainer';
import PostFormContainer from '../posts/PostFormContainer';
import ProfileFormContainer from './ProfileFormContainer';
import NewsFeed from '../NewsFeed';

const Profile = ({ getComments, allComments, getPostlikes, allPostlikes, getUser, currentUserId, user }) => {
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
  let profilepicUrl= '';
  let bio = '';

  if (user[0]) {
    userProfile = user[0];
    posts = Object.values(userProfile.posts);
    profilepicUrl = userProfile.profilepicUrl;
    bio = userProfile.bio;
  };

  console.log(posts);

  return (
    <div className='profile-page'>
      <HeaderContainer />
      <div className='profile'>
        <div className='profile-left'>
          <div className='profile-info'>
            <div className='profile-pic'>
                <ProfileFormContainer profilepicUrl={profilepicUrl}/>
            </div>
            <div className='profile-bio'>
              <p>{bio}</p>
            </div>
          </div>  
          <div className='friends-list'>

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