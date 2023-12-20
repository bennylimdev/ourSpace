import React from 'react';
import Tasks from './microcomp/tasks';

class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='home'>
               <Tasks />
               <div className='notes'>
               </div>
               <div className='upcoming'>
               </div>
               <div className="word">
               </div>
               <div className='time'>
               </div>
            </div> 
        );
    };
};

export default Home; 