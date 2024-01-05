import { connect } from 'react-redux';

import ProfileForm from './ProfileForm';
import { editUser, getUser } from '../../actions/user_actions';

const mSTP = state => ({
});

const mDTP = dispatch => ({
    editUser: user => dispatch(editUser(user))
});

export default connect(mSTP, mDTP)(ProfileForm);
