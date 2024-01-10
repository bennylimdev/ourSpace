import React from 'react';

import HeaderContainer from './HeaderContainer';
import PostFormContainer from './posts/PostFormContainer';
import LeftNav from './LeftNav';
import NewsFeed from './NewsFeed';

class Home extends React.Component {
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.getPosts();
        this.props.getComments();
        this.props.getPostlikes();
    };

    render(){
        return(
            <div className='home'>
            <HeaderContainer />
            <LeftNav currentUserId={this.props.currentUserId}/>
            <PostFormContainer />
            <NewsFeed posts={this.props.posts} comments={this.props.comments} postlikes={this.props.postlikes} />
            <div className='right__nav__bar'>
            </div>
          </div> 
        );
    };
};

export default Home;