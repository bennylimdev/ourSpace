import { connect } from "react-redux";
import NewsFeed from "./NewsFeed";
import { getComments } from "../actions/comment_actions";

const mSTP = (state, ownProps) => ({
    allComments: Object.values(state.entities.comments)
});

const mDTP = dispatch => ({
    getComments: () => dispatch(getComments())
});

export default connect(mSTP, mDTP)(NewsFeed);