import React from 'react';
import PostForm from './PostForm';
import LeftNav from './LeftNav';

class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='home'>
                <div className='header'>
                    <h3>OurSpace</h3>
                </div>
                <LeftNav />
                <PostForm />
                <div className='news__feed'>
                </div>
                <div className='right__nav__bar'>
                </div>
            </div> 
        );
    };
};

export default Home; 