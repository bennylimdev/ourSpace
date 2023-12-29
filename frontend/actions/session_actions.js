import * as SessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const register = user => dispatch => (
    SessionUtil.register(user).then(user => dispatch(receiveCurrentUser(user)))
);