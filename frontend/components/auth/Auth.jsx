import React, { useState } from 'react';

const Auth = ({ errors, user, signUp, logIn, showModal }) => {
    const [form, setForm] = useState(user);
    const [isSignup, setIsSignup] = useState(false); 
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // make sure confirm password is not posted
        if(isSignup) {
            if(form.password === form.confirmPassword) {
                signUp(form);
            } else {
                // showModal();
            }
        } else {
            logIn({ email: form.email, password: form.password });
        }
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };
    
    return (
        <div className='auth__form-container'>
            <h1 className='logo'>ourSpace</h1>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='firstName'>First Name</label>
                                <input
                                    name='first_name'
                                    type='text'
                                    placeholder='First Name'
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='lastName'>Last Name</label>
                                <input
                                    name='last_name'
                                    type='text'
                                    placeholder='Last Name'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='email'>Email</label>
                            <input
                                name='email'
                                type='text'
                                placeholder='email'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='password'>Password</label>
                            <input
                                name='password'
                                type='password'
                                placeholder='Password'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='confirmPassword'>Confirm Password</label>
                                <input
                                    name='confirmPassword'
                                    type='password'
                                    placeholder='Confirm Password'
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_button'>
                            <button>{isSignup ? 'Sign Up' : 'Sign In'}</button>
                        </div>
                    </form>
                    <div className='auth__form-container_fields-account'>
                        <p>
                            {isSignup 
                                ? 'Already have an account? '
                                : "Don't have an account? "
                            }
                            <span onClick={switchMode}>
                                {isSignup ? 'Sign In' : 'Sign Up'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <footer className='footer'>Benny Lim</footer>
        </div>
    );
};

export default Auth;