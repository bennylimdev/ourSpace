import { connect } from 'react-redux';
import { createComment, getComments } from '../../actions/comment_actions';
import { createPostlike, deletePostlike } from '../../actions/postlike_actions';
import Post from './Post';

const mSTP = (state, ownProps) => ({
    comment: {
        post_id: ownProps.id,
        author_id: 2,
        body: ''
    },
    postlike: {
        post_id: ownProps.id,
        author_id: 2,
    }
});

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    createPostlike: postlike => dispatch(createPostlike(postlike)),
    deletePostlike: postlikeId => dispatch(deletePostlike(postlikeId))
});

export default connect(mSTP, mDTP)(Post);