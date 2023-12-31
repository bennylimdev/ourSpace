import { connect } from 'react-redux';

import ProfilePicture from './ProfilePicture';
import { editUser, getUser } from '../../actions/user_actions';

const mSTP = state => ({
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    editUser: user => dispatch(editUser(user))
});

export default connect(mSTP, mDTP)(ProfilePicture);
