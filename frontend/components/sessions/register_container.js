import { connect } from 'react-redux';
import RegisterForm from './register';

// for error handling in future
const mSTP = state => ({

});

const mDTP = dispatch => ({
    register: user => dispatch(register(user))
});

export default connect(mSTP, mDTP)(RegisterForm);
