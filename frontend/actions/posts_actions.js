import * as PostUtil from '../util/post_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const recieveAllPosts = posts => ({
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

export const fetchPosts = () => dispatch => (
    PostUtil.fetchPosts().then(posts => dispatch(recieveAllPosts(posts)))
);
export const fetchPost = () => dispatch => (
    PostUtil.fetchPost().then(post => dispatch(recievePost(post)))
);
export const updatePost = () => dispatch => (
    PostUtil.updatePost().then(post => dispatch(recievePost(post)))
);
export const createPost = () => dispatch => (
    PostUtil.createPost().then(post => dispatch(recievePost(post)))
);
export const deletePosts = () => dispatch => (
    PostUtil.deletePost().then(posts => dispatch(removePost(post)))
);

