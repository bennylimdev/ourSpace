import { connect } from "react-redux";

import Profile from './Profile'
import { getPosts } from '../../actions/posts_actions'
import { getPostlikes } from "../../actions/postlike_actions";
import { getComments } from "../../actions/comment_actions";
import { getUser, editUserBio } from "../../actions/user_actions";

const mSTP = state => ({
    currentUserId: state.session.id,
    users: state.entities.users,
    allComments: Object.values(state.entities.comments),
    allPostlikes: Object.values(state.entities.postlikes),
    allPosts: Object.values(state.entities.posts),
    editForm: {
        id: state.session.id,
        bio: state.session.user.bio,
    }
});

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    getComments: () => dispatch(getComments()),
    getPostlikes: () => dispatch(getPostlikes()),
    getUser: currentUserId => dispatch(getUser(currentUserId)),
    editUserBio: user => dispatch(editUserBio(user))
});

export default connect(mSTP, mDTP)(Profile);