import * as AuthUtil from '../util/auth_util';
export const LOGIN_CURRENT_USER = 'LOGIN_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const loginCurrentUser = user => ({
    type: LOGIN_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_SESSION_ERRORS
});

export const signUp = user => dispatch => (
   AuthUtil.signUp(user)
    .then(
        user => dispatch(loginCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
    )
);

export const logIn = user => dispatch => (
    AuthUtil.logIn(user)
        .then(
            user => dispatch(loginCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
);

export const logOut = currentUserId => dispatch => (
    AuthUtil.logOut(currentUserId)
        .then(
            () => dispatch(logoutCurrentUser()),
            error => dispatch(receiveErrors(error.responseJSON))
        )
);