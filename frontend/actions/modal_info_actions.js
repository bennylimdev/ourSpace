export const GIVE_POST_ID = "GIVE_POST_ID";
export const GIVE_USER_ID = "GIVE_USER_ID";

export const givePostId = postId => ({
    type: GIVE_POST_ID,
    postId
});

export const giveUserId = userId => ({
    type: GIVE_USER_ID,
    userId
});