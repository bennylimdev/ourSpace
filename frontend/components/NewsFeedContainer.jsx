import { connect } from "react-redux";
import NewsFeed from "./NewsFeed";
import { getPosts } from "../actions/posts_actions";

const mSTP = state => ({

});

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts())
});

export default connect(mSTP, mDTP)(NewsFeed);