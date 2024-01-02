import React, { useEffect } from 'react';
import Header from './Header';
import PostFormContainer from './posts/PostFormContainer';
import LeftNav from './LeftNav';
import Post from './posts/Post';
import NewsFeedContainer from './NewsFeedContainer';

const Home = ({ getPosts, allPosts }) => {
    
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            await getPosts();
          } catch (error) {
            console.log('getPosts not working')
          }
        };
        fetchPosts();
    }, [getPosts]);

    return (
        <div className='home'>
            <Header />
            <LeftNav />
            <PostFormContainer />
            <NewsFeedContainer posts={allPosts}/>
            <div className='right__nav__bar'>
            </div>
        </div> 
    );
};

export default Home;
