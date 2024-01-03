import { connect } from 'react-redux';
import { createComment, getComments } from '../../actions/comment_actions';
import { createLike } from '../../actions/like_actions';
import Post from './Post';

const mSTP = (state, ownProps) => ({
    comment: {
        post_id: ownProps.id,
        author_id: 156,
        body: ''
    }
});

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    createLike: like => dispatch(createLike(like))
});

export default connect(mSTP, mDTP)(Post);