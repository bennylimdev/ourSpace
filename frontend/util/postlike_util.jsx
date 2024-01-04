export const getPostlikes = () => (
    $.ajax({
        method: 'GET',
        url: 'api/postlikes'
    })
);

export const getPostlike = postlikeId => (
    $.ajax({
        method: 'GET',
        url: `api/postlikes/${postlikeId}`
    })
);

export const createPostlike = postlike => (
    $.ajax({
        method: 'POST',
        url: 'api/postlikes',
        data: { postlike }
    })
);

export const deletePostlike = postlikeId => (
    $.ajax({
        method: 'DELETE',
        url: `api/postlikes/${postlikeId}`
    })
);



