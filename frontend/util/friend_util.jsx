export const getFriends = () => (
    $.ajax({
        method: 'GET',
        url: 'api/friends'
    })
);

export const getFriend = friendId => (
    $.ajax({
        method: 'GET',
        url: `api/friends/${friendId}`
    })
);

export const createFriend = friend => (
    $.ajax({
        method: 'POST',
        url: 'api/friends',
        data: { friend }
    })
);

export const deleteFriend = friendId => (
    $.ajax({
        method: 'DELETE',
        url: `api/friends/${friendId}`
    })
);

