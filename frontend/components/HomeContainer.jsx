import { connect } from "react-redux";

import Home from './Home';

import { getPosts } from "../actions/posts_actions";
import { getComments } from "../actions/comment_actions";
import { getPostlikes } from "../actions/postlike_actions";
import { logOut } from '../actions/auth_actions';

const mSTP = state => ({
    posts: Object.values(state.entities.posts),
    comments: Object.values(state.entities.comments),
    postlikes: Object.values(state.entities.postlikes),
    currentUserId: state.session.id,
    currentUser: state.session.user,
});

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    getComments: () => dispatch(getComments()),
    getPostlikes: () => dispatch(getPostlikes()),
    logOut: currentUserId => dispatch(logOut(currentUserId))
});

export default connect(mSTP, mDTP)(Home);
