import React, { useEffect, useState } from 'react';
import { Stack, Button, TextField } from '@mui/material';

import HeaderContainer from '../header/HeaderContainer';
import PostFormContainer from '../posts/PostFormContainer';
import ProfilePictureContainer from './ProfilePictureContainer';
import NewsFeed from './../NewsFeed';
import ProfileFriend from './ProfileFriend';

const Profile = ({ user, editForm, getComments, allComments, getPostlikes, allPostlikes, getUser, currentUserId, users, editUserBio }) => {
  const [editBioForm, setEditBioForm] = useState(editForm);

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

  const handleChange = (e) => {
    setEditBioForm({...editBioForm, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUserBio(editBioForm);
    e.target.reset();
  }

  let userProfile = null;
  let posts = [];
  let profilepicUrl = '';
  let bio = '';
  let friends = [];
  let editBio = null;

  if(user){
    userProfile = user;
    profilepicUrl = userProfile.profilepicUrl;
    friends = userProfile.friends;
    bio = userProfile.bio;
  };

  if(user.posts){
    posts = Object.values(userProfile.posts);
  };

  return (
    <div className='profile-page'>
      <HeaderContainer />
      <div className='profile'>
        <div className='profile-left'>
          <div className='profile-info'>
            <div className='profile-pic'>
                <ProfilePictureContainer userId={user.id} profilepicUrl={profilepicUrl}/>
            </div>
            <div className='profile-bio'>
              <h3>Bio</h3>
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