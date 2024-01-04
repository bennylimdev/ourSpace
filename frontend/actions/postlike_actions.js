import * as PostlikeUtil from '../util/postlike_util';

export const RECEIVE_POST_LIKES = 'RECEIVE_POST_LIKES';
export const RECEIVE_POST_LIKE = 'RECEIVE_POST_LIKE';
export const REMOVE_POST_LIKE = 'REMOVE_POST_LIKE';

const receivePostlikes = postlikes => ({
    type: RECEIVE_POST_LIKES,
    postlikes
});

const receivePostlike = postlike => ({
    type: RECEIVE_POST_LIKE,
    postlike
});

const removePostlike = postlikeId => ({
    type: REMOVE_POST_LIKE,
    postlikeId
});

export const getPostlikes = () => dispatch => (
    PostlikeUtil.getPostlikes().then(
        postlikes => dispatch(receivePostlikes(postlikes))
    )
);

export const getPostlike = () => dispatch => (
    PostlikeUtil.getPostlike().then(
        postlike => dispatch(receivePostlike(postlike))
    )
);

export const createPostlike = postlike => dispatch => (
    PostlikeUtil.createPostlike(postlike).then(
        postlike => dispatch(receivePostlike(postlike))
    )
);

export const deletePostlike = postlikeId => dispatch => (
    PostlikeUtil.deletePostlike(postlikeId).then(
        () => dispatch(removePostlike(postlikeId))
    )
);