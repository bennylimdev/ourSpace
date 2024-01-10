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
            <div className='home-page'>
                <HeaderContainer />
                <div className='home'>
                    <LeftNav currentUserId={this.props.currentUserId}/>
                    <PostFormContainer />
                    <NewsFeed posts={this.props.posts} comments={this.props.comments} postlikes={this.props.postlikes} />
                </div>
          </div> 
        );
    };
};

export default Home;