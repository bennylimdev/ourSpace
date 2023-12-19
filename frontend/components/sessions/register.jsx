import React from 'react';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    render() {
        return (
            <div className='register'>
                <h1 className='logo'>Join us!</h1>
                <div className='register__form__container'>
                    <form className='register__form'>
                        <input
                            id='first-name'
                            type='text'
                            onChange={this.update('first_name')}
                            placeholder='First Name'
                        />
                        <input
                            id='last-name'
                            type='text'
                            onChange={this.update('last_name')}
                            placeholder='Last Name'
                        />
                        <input
                            id='email'
                            type='text'
                            onChange={this.update('email')}
                            placeholder='Email'
                        />
                        <input
                            id='password'
                            type='password'
                            onChange={this.update('password')}
                            placeholder='Password'
                        />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default RegisterForm;