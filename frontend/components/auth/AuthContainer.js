import { connect } from 'react-redux';
import { signUp, logIn } from '../../actions/auth_actions';
import Auth from './Auth';

// for error handling in future
const mSTP = state => ({
    user: { 
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
    errors: state.errors.auth
});

const mDTP = dispatch => ({
    signUp: user => dispatch(signUp(user)),
    logIn: user => dispatch(logIn(user))
});

export default connect(mSTP, mDTP)(Auth);