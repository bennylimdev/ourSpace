import { connect } from "react-redux";
import Home from "./Home";
import { getPosts } from "../actions/posts_actions";

const mSTP = state => ({
    news: state.entities.posts
});

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts())
});

export default connect(mSTP, mDTP)(Home);