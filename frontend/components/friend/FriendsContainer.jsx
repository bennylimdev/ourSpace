import { connect } from "react-redux";

import { getUsers, getUser } from '../../actions/user_actions';
import Friends from "./Friends";

const mSTP = state => ({
    users: Object.values(state.entities.users),
    currentUserId: state.session.id,
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    getUsers: () => dispatch(getUsers()),
    getUser: name => dispatch(getUser(name))
});

export default connect(mSTP, mDTP)(Friends);