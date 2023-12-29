import React from 'react';
import Header from './Header';
import PostForm from './posts/PostForm';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='profile'>
                <Header />
                <div className='profileinfo'>
                
                </div>
                <div className='friendslist'>

                </div>
                <PostForm />
                <div className='newsfeed'>
                
                </div>
            </div>
        );
    };
};

export default Profile;