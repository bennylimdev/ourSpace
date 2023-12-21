import React from 'react';
import Header from './Header';

class Friends extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='friends'> 
                <Header />
            </div>
        );
    };
};

export default Friends;