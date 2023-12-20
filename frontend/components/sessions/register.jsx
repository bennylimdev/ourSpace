import React from 'react';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props);
        console.log(this.state);
        this.props.register(this.state);
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
                            type='text'
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder='Username'
                        />
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder='Email'
                        />
                        <input
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder='Password'
                        />
                        <button type='submit' onClick={(e) => this.handleSubmit(e)}>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default RegisterForm;