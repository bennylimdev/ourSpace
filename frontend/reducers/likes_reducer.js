import { RECEIVE_POST_LIKES, RECEIVE_POST_LIKE, REMOVE_POST_LIKE } from '../actions/postlike_actions';

const LikesReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_POST_LIKES:
            return action.postlikes
        case RECEIVE_POST_LIKE:
            nextState[action.postlike.id] = action.postlike;
            return nextState;
        case REMOVE_POST_LIKE:
            delete nextState[action.postlikeId];
            return nextState;
        default:
            return state;
    };
};

export default LikesReducer;