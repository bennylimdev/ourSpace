import React, { useEffect } from 'react';
import Header from './Header';
import PostFormContainer from './posts/PostFormContainer';
import LeftNav from './LeftNav';
import NewsFeed from './NewsFeed';

const Home = ({ getComments, allComments, getPosts, allPosts, getLikes, allLikes }) => {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await Promise.all([getComments(), getPosts(), getLikes()]);
      } catch (error) {
        console.log('dispatch not working')
      }
    };
    fetchPosts();
  }, [getPosts]);

  return (
    <div className='home'>
      <Header />
      <LeftNav />
      <PostFormContainer />
      <NewsFeed posts={allPosts} comments={allComments} likes={allLikes} />
      <div className='right__nav__bar'>
      </div>
    </div> 
  );
};

export default Home;
