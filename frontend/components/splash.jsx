import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='splash'>
                <nav>
                    <div className="logo">OurSpace</div>
                    <div>
                        <ul className="nav__links">
                            <li>LOGIN</li>
                            <li>REGISTER</li>
                        </ul>
                    </div>
                </nav>
                <div className='splash__container'>
                    <div className='slogan__container'>
                        <p className='slogan'>BUILD YOUR SPACE</p>
                    </div>
                    <p className='bio'>Make your own space for you. Share it with others. Join us.</p>
                </div>
            </div>
        );
    };
};

export default Splash;