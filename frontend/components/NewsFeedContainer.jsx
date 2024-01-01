import { connect } from "react-redux";
import NewsFeed from "./NewsFeed";
import { getPosts } from "../actions/posts_actions";

const mSTP = state => ({
    news: state.entities.posts
});

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts())
});

export default connect(mSTP, mDTP)(NewsFeed);