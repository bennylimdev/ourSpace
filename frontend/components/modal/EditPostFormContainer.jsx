import { connect } from 'react-redux';

import { updatePost } from '../../actions/posts_actions';
import { hideModal } from '../../actions/modal_actions';

import EditPostForm from './EditPostForm';

const mSTP = state => ({
    post: {
        id: state.ui.postId,
        author_id: state.session.id,
        body: ''
    },
    currentUser: state.session.user,
    postId: state.ui.postId
});

const mDTP = dispatch => ({
    editPost: post => dispatch(updatePost(post)),
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(EditPostForm);