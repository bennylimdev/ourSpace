import * as PostUtil from '../util/post_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const getPosts = () => dispatch => (
    PostUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)))
);
export const fetchPost = () => dispatch => (
    PostUtil.fetchPost().then(post => dispatch(receivePost(post)))
);
export const updatePost = () => dispatch => (
    PostUtil.updatePost().then(post => dispatch(receivePost(post)))
);
export const createPost = post => dispatch => (
    PostUtil.createPost(post).then(post => dispatch(receivePost(post)))
);
export const deletePost = postId => dispatch => (
    PostUtil.deletePost(postId).then(() => dispatch(removePost(postId)))
);

