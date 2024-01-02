import { RECEIVE_ALL_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';

const FriendsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_FRIENDS:
            return action.friends;
        case RECEIVE_FRIEND:
            nextState[action.friend.id] = action.friend;
            return nextState;
        case REMOVE_FRIEND:
            delete nextState[action.friendId];
            return nextState;
        default:
            return state;
    };
};

export default FriendsReducer;