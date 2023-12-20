import React from 'react';

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='left__nav'>
              <h3 className='nav__link'>
                Current User
              </h3>
              <h3 className='nav__link'>
                Find Friends
              </h3>
            </div>
        );
    };
};

export default LeftNav