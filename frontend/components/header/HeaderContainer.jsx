import { connect } from 'react-redux';
import Header from './Header';
import { logOut } from '../../actions/auth_actions';

// for error handling in future
const mSTP = state => ({
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    logOut: currentUserId => dispatch(logOut(currentUserId))
});

export default connect(mSTP, mDTP)(Header);