import { LOGIN_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/auth_actions";

const _nullUser = {
    id: null
}

const AuthReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case LOGIN_CURRENT_USER:
            nextState.id = action.user.id;
            nextState.user = action.user
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState.id = null;
            return nextState;
        default:
            return state;
    };
};

export default AuthReducer;