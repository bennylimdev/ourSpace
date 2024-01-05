import { connect } from "react-redux";

import Profile from './Profile'
import { getPosts } from '../../actions/posts_actions'
import { getPostlikes } from "../../actions/postlike_actions";
import { getComments } from "../../actions/comment_actions";
import { getUser } from "../../actions/user_actions";

const mSTP = state => ({
    allPosts: Object.values(state.entities.posts),
    allComments: Object.values(state.entities.comments),
    allPostlikes: Object.values(state.entities.postlikes),
    user: Object.values(state.entities.users),
    currentUserId: 2
});

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    getComments: () => dispatch(getComments()),
    getPostlikes: () => dispatch(getPostlikes()),
    getUser: userId => dispatch(getUser(userId))
});

export default connect(mSTP, mDTP)(Profile);