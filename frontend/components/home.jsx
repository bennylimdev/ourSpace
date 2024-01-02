import React, { useEffect } from 'react';
import Header from './Header';
import PostFormContainer from './posts/PostFormContainer';
import LeftNav from './LeftNav';
import NewsFeedContainer from './NewsFeedContainer';

const Home = ({ getComments, allComments, getPosts, allPosts }) => {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await Promise.all([getComments(), getPosts()]);
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
      <NewsFeedContainer posts={allPosts} comments={allComments}/>
      <div className='right__nav__bar'>
      </div>
    </div> 
  );
};

export default Home;
