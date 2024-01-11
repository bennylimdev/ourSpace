import { connect } from 'react-redux';

import Auth from './Auth';

import { signUp, logIn } from '../../actions/auth_actions';
import { removeErrors, receiveErrors } from '../../actions/auth_actions';

// for error handling in future
const mSTP = state => ({
    user: { 
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    errors: state.errors
});

const mDTP = dispatch => ({
    signUp: user => dispatch(signUp(user)),
    logIn: user => dispatch(logIn(user)),
    removeErrors: () => dispatch(removeErrors()),
    receiveErrors: error => dispatch(receiveErrors(error))
});

export default connect(mSTP, mDTP)(Auth);