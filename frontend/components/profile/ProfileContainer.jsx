import { connect } from "react-redux";

import Profile from './Profile'
import { getPosts } from '../../actions/posts_actions'
import { getPostlikes } from "../../actions/postlike_actions";
import { getComments } from "../../actions/comment_actions";
import { getUser } from "../../actions/user_actions";

const mSTP = state => ({
    currentUserId: state.session.id,
    currentUser: state.session.user,
    posts: Object.values(state.session.user.posts),
    allComments: Object.values(state.entities.comments),
    allPostlikes: Object.values(state.entities.postlikes)
});

const mDTP = dispatch => ({
    getComments: () => dispatch(getComments()),
    getPostlikes: () => dispatch(getPostlikes()),
    getUser: currentUserId => dispatch(getUser(currentUserId))
});

export default connect(mSTP, mDTP)(Profile);