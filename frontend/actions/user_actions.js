import * as UserUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECIEVE_USERS';
export const RECEIVE_USER = 'RECIEVE_USER';

const receiveUsers = users => ({
        type: RECEIVE_USERS,
        users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUsers = () => dispatch => (
    fetchUsers().then(users => dispatch(recieveUsers(users)))
);

export const fetchUser = userId => dispatch => (
    fetchUser(userId).then(user => dispatch(recieveUser(user)))
);

