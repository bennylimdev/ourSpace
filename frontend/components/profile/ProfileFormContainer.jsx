import { connect } from 'react-redux';

import ProfileForm from './ProfileForm';
import { editUser } from '../../actions/user_actions';

const mSTP = state => ({
    user: {
        id: 2,
        profile_pic: ''
    }
});

const mDTP = dispatch => ({
    editUser: user => dispatch(editUser(user))
});

export default connect(mSTP, mDTP)(ProfileForm);
