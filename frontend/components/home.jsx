import React from 'react';
import Header from './Header';
import PostForm from './posts/PostForm';
import LeftNav from './LeftNav';
import Post from './posts/Post';

class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='home'>
                <Header />
                <LeftNav />
                <PostForm />
                <div className='news__feed'>
                    <Post />
                </div>
                <div className='right__nav__bar'>
                </div>
            </div> 
        );
    };
};

export default Home; 