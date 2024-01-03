import { connect } from "react-redux";
import Home from './Home'
import { getPosts } from "../actions/posts_actions";
import { getComments } from "../actions/comment_actions";
import { getLikes } from "../actions/like_actions";

const mSTP = state => ({
    allPosts: Object.values(state.entities.posts),
    allComments: Object.values(state.entities.comments),
    allLikes: Object.values(state.entities.likes)
});

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    getComments: () => dispatch(getComments()),
    getLikes: () => dispatch(getLikes())
});

export default connect(mSTP, mDTP)(Home);