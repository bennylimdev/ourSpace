export const sendFriendReq = ids => (
    $.ajax({    
        method: 'POST',
        url: 'api/friendrequests',
        data: { ids }
    })
);

export const updateFriendStatus = friendship => (
    $.ajax({
        method: 'PATCH',
        url: `api/friendrequests/${friendship.id}`,
        data: { friendship }
    })
);