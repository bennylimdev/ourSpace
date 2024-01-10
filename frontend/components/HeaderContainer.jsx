import { connect } from 'react-redux';

import Header from './Header';
import { logOut } from '../actions/auth_actions';
import { getUsers } from '../actions/user_actions';

// for error handling in future
const mSTP = state => ({
    currentUserId: state.session.id,
    users: state.entities.users,
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    logOut: currentUserId => dispatch(logOut(currentUserId)),
    getUsers: () => dispatch(getUsers())
});

export default connect(mSTP, mDTP)(Header);