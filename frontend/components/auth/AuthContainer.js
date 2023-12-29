import { connect } from 'react-redux';
import { register } from '../../actions/auth_actions';
import Auth from './Auth';

// for error handling in future
const mSTP = state => ({
    state: {}
});

const mDTP = dispatch => ({
    register: user => dispatch(register(user))
});

export default connect(mSTP, mDTP)(Auth);