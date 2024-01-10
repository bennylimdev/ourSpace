import { connect } from "react-redux";

import Friends from "./Friends";

import { getUsers, getUser } from '../../actions/user_actions';

const mSTP = state => ({
    users: Object.values(state.entities.users),
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    getUsers: () => dispatch(getUsers()),
    getUser: name => dispatch(getUser(name)),
});

export default connect(mSTP, mDTP)(Friends);