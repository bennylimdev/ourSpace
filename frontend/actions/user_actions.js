import * as UserUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const getUsers = () => dispatch => (
    UserUtil.getUsers().then(users => dispatch(receiveUsers(users)))
);

export const getUser = userId => dispatch => (
    UserUtil.getUser(userId).then(user => dispatch(receiveUser(user)))
);

export const editUser = user => dispatch => (
    UserUtil.updateUser(user).then(user => dispatch(receiveUser(user)))
);

export const editUserBio = user => dispatch => (
    UserUtil.editUserBio(user).then(user => dispatch(receiveUser(user)))
);
