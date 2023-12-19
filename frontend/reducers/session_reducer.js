import { RECIEVE_CURRENT_USER } from "../actions/session_actions";

const _nullUser = {
    id: null
};

const SessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECIEVE_CURRENT_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return state;
    };
};

export default SessionReducer;