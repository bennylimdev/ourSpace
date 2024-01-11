import React from 'react';
import { Stack, Button } from '@mui/material';

import HeaderContainer from '../HeaderContainer';
import PostFormContainer from '../posts/PostFormContainer';
import ProfilePictureContainer from './ProfilePictureContainer';
import NewsFeed from './../NewsFeed';
import ProfileFriend from './ProfileFriend';

class Profile extends React.Component {
  constructor(props){
    super(props);
  };

  componentDidMount(){
    this.props.getPosts();  
  };

  handleChange = (e) => {
    setEditBioForm({...editBioForm, [e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    editUserBio(editBioForm);
    e.target.reset();
  }

  render(){
    let postInput = null;
    let bioBtn = null;
    let removeFriendBtn = null;

    if(this.props.user.id === this.props.currentUserId){
      postInput = <PostFormContainer />;
    }

    let posts = this.props.posts.filter((post) => post.author_id === this.props.user.id)

    return(
      <div className='profile-page'>
        <HeaderContainer />
        <div className='profile'>
          <div className='profile-left'>
            <div className='profile-info'>
              <div className='profile-pic'>
                  <ProfilePictureContainer userId={this.props.user.id} profilepicUrl={this.props.user.profilepicUrl}/>
              </div>
              <div className='profile-bio'>
                <h3>Bio</h3>
                <p>{this.props.user.bio}</p>
                <Button>Edit Bio</Button> 
              </div>
            </div>  
            <div className='friends__list'>
              <h3>Friends</h3>
              <p>{this.props.user.friends.length} friend (s)</p>
              <Stack spacing={{ xs: 1.5 }} >
                {this.props.user.friends.map((user) => (
                  <ProfileFriend user={user} key={user.id} />
                ))}
              </Stack>
            </div>
          </div>
          <div className='profile-right'>
            {postInput}
            <p></p>
            <NewsFeed posts={posts} comments={this.props.comments} postlikes={this.props.postlikes}/>
          </div>
        </div>
      </div>
    );
  };
};

export default Profile;