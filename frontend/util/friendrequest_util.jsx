export const sendFriendReq = ids => (
    $.ajax({    
        method: 'POST',
        url: 'api/friendrequests',
        data: { ids }
    })
);

export const updateFriendStatus = friendrequestId => (
    $.ajax({
        method: 'PATCH',
        url: `api/friendrequests/${friendrequestId}`,
        data: { friendrequestId }
    })
);