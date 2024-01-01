import { connect } from 'react-redux';
import { createPost } from '../../actions/posts_actions';
import PostForm from './PostForm';

const mSTP = state => ({
    post: {
        author_id: 156,
        body: ''
    }
});

const mDTP = dispatch => ({
    createPost: post => dispatch(createPost(post))
});

export default connect(mSTP, mDTP)(PostForm);