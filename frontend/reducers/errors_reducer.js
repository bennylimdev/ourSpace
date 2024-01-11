import { RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS } from "../actions/auth_actions";

const ErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case REMOVE_SESSION_ERRORS:
            return [];
        default:
            return state;
    };
};

export default ErrorsReducer;