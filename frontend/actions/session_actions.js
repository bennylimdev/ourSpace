import * as SessionUtil from '../util/session_util';

export const RECIEVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';

const recieveCurrentUser = user => ({
    type: RECIEVE_CURRENT_USER,
    user
});

export const register = user => dispatch => (
    SessionUtil.register(user).then(user => dispatch(recieveCurrentUser(user)))
);