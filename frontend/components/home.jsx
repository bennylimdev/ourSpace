import React from 'react';
import Header from './Header';
import PostFormContainer from './posts/PostFormContainer';
import LeftNav from './LeftNav';
import Post from './posts/Post';
import NewsFeedContainer from './NewsFeedContainer';

class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='home'>
                <Header />
                <LeftNav />
                <PostFormContainer />
                <NewsFeedContainer>
                    <Post />
                </NewsFeedContainer>
                <div className='right__nav__bar'>
                </div>
            </div> 
        );
    };
};

export default Home; 