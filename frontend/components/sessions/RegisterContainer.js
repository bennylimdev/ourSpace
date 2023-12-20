import { connect } from 'react-redux';
import { register } from '../../actions/session_actions';
import RegisterForm from './register';

// for error handling in future
const mSTP = state => ({
    state: {}
});

const mDTP = dispatch => ({
    register: user => dispatch(register(user))
});

export default connect(mSTP, mDTP)(RegisterForm);