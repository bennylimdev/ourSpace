import { connect } from 'react-redux';
import { signUp, logIn } from '../../actions/auth_actions';
import { showModal } from '../../actions/modal_actions';
import Auth from './Auth';

// for error handling in future
const mSTP = state => ({
    user: { 
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    errors: state.errors,
});

const mDTP = dispatch => ({
    signUp: user => dispatch(signUp(user)),
    logIn: user => dispatch(logIn(user)),
    showModal: () => dispatch(showModal())
});

export default connect(mSTP, mDTP)(Auth);