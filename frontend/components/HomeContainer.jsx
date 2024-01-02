import { connect } from "react-redux";
import Home from "./Home";
import { getPosts } from "../actions/posts_actions";
import { getComments } from "../actions/comment_actions";

const mSTP = state => ({
    allPosts: Object.values(state.entities.posts),
    allComments: Object.values(state.entities.comments)
});

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    getComments: () => dispatch(getComments()),
});

export default connect(mSTP, mDTP)(Home);