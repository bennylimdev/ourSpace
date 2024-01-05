import { connect } from "react-redux";
import Home from './Home'
import { getPosts } from "../actions/posts_actions";
import { getComments } from "../actions/comment_actions";
import { getPostlikes } from "../actions/postlike_actions";

const mSTP = state => ({
    allPosts: Object.values(state.entities.posts),
    allComments: Object.values(state.entities.comments),
    allPostlikes: Object.values(state.entities.postlikes)
});

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    getComments: () => dispatch(getComments()),
    getPostlikes: () => dispatch(getPostlikes())
});

export default connect(mSTP, mDTP)(Home);
