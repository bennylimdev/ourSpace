import * as FriendUtil from '../util/friend_util';

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveAllFriends = friends => ({
    type: RECEIVE_ALL_FRIENDS,
    friends
});

const receiveFriend = friendId => ({
    type: RECEIVE_FRIEND,
    friend
});

const removeFriend = friendId => ({
    type: REMOVE_FRIEND,
    friendId
});

export const getFriends = () => dispatch => (
    FriendUtil.getFriends().then(
        friends => dispatch(receiveAllFriends(friends))
    )
);

export const getFriend = friendId => dispatch => (
    FriendUtil.getFriend(friendId).then(
        friendId => dispatch(receiveFriend(friendId))
    )
);

export const updateFriendStatus = friendId => dispatch => (
    FriendUtil.updateFriendStatus(friendId).then(
        friend => dispatch(receiveFriend(friend))
    )
);

export const deleteFriend = friendId => dispatch => (
    FriendUtil.deleteFriend(friendId).then(
        () => dispatch(removeFriend(friendId))
    )
);