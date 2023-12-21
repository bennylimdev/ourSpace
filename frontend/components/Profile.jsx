import React from 'react';
import Header from './Header';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='Profile'>
                <Header />
                
            </div>
        );
    };
};

export default Profile;