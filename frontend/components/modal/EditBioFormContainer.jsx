import { connect } from 'react-redux';

import { editUserBio } from '../../actions/user_actions';
import { hideModal } from '../../actions/modal_actions';

import EditBioForm from './EditBioForm';

const mSTP = state => ({
    user: {
        id: state.ui.userId,
        bio: ''
    },
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    editUserBio: user => dispatch(editUserBio(user)),
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(EditBioForm);