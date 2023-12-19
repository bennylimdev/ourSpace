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
        return(
            <div className='register'>
                <div className='register__form__container'>
                    <form>
                        <input
                            id='first-name'
                            type='text'
                            value= {first_name}
                            onChange={this.update('first_name')}
                            placeholder='First Name'
                        />
                        <input
                            id='last-name'
                            type='text'
                            value= {last_name}
                            onChange={this.update('last_name')}
                            placeholder='Last Name'
                        />
                        <input
                            id='email'
                            type='text'
                            value= {email}
                            onChange={this.update('email')}
                            placeholder='Email'
                        />
                        <input
                            id='password'
                            type='password'
                            value= {password}
                            onChange={this.update('password')}
                            placeholder='Password'
                        />

                        <div className='signup-button' onClick={this.handleSubmit}>Sign Up</div>
                    </form>
                </div>
            </div>
        );
    };
};

export default RegisterForm;