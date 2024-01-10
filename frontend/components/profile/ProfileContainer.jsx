import { connect } from "react-redux";

import Profile from './Profile'
import { getPosts } from '../../actions/posts_actions'
import { getPostlikes } from "../../actions/postlike_actions";
import { getComments } from "../../actions/comment_actions";
import { getUser, editUserBio, getUsers } from "../../actions/user_actions";
import { logOut } from '../../actions/auth_actions';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.id,
    currentUser: state.session.user,
    comments: Object.values(state.entities.comments),
    postlikes: Object.values(state.entities.postlikes),
    posts: Object.values(state.entities.posts),
    editForm: {
        id: state.session.id,
        bio: state.session.user.bio,
    }
});

const mDTP = dispatch => ({
    getUsers: () => dispatch(getUsers()),
    getPosts: () => dispatch(getPosts()),
    getComments: () => dispatch(getComments()),
    getPostlikes: () => dispatch(getPostlikes()),
    getUser: userId => dispatch(getUser(userId)),
    editUserBio: user => dispatch(editUserBio(user)),
    logOut: currentUserId => dispatch(logOut(currentUserId))
});

export default connect(mSTP, mDTP)(Profile);