import { RECEIVE_SESSION_ERRORS } from "../actions/auth_actions";

const ErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        default:
            return state;
    };
};

export default ErrorsReducer;