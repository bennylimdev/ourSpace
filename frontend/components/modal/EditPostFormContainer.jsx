import { connect } from 'react-redux';
import { updatePost } from '../../actions/posts_actions';

import EditPostForm from './EditPostForm';

const mSTP = state => ({
    post: {
        author_id: state.session.id,
        body: ''
    },
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    editPost: post => dispatch(updatePost(post)),
});

export default connect(mSTP, mDTP)(EditPostForm);