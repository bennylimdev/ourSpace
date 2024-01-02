export const getComments = () => (
    $.ajax({
        method: 'GET',
        url: 'api/comments'
    })
);

export const getComment = commentId => (
    $.ajax({
        method: 'GET',
        url: `api/comment/${commentId}`
    })
);

export const createComment = comment => (
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: { comment }
    })
);

export const editComment = commentId => (
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${commentId}`,
        data: { comment }
    })
);

export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${commentId}`
    })
);

