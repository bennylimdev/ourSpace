import { connect } from 'react-redux';

import ProfileForm from './ProfileForm';
import { editUser } from '../../actions/user_actions';

const mSTP = state => ({
    user: {
        id: state.sessions.id,
        profile_pic: ''
    }
});

const mDTP = dispatch => ({
    editUser: user => dispatch(editUser(user))
});

connect(mSTP, mDTP)(ProfileForm);
