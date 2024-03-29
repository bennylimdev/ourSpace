import React from 'react';
import Stack from '@mui/material/Stack';
import PostContainer from './posts/PostContainer';

// get posts create post with each post put them in stack
const NewsFeed = ({ posts, comments, postlikes }) => {
  return (
    <div className='news__feed'>
      <Stack spacing={{ xs: 3 }} direction='column-reverse'>
        {posts.map((post) => (
          <PostContainer authorId = {post.author_id} comments={comments} postlikes={postlikes} key={post.id} id={post.id} first_name={post.first_name} last_name={post.last_name} body={post.body} profilepicUrl={post.profilepicUrl}/>
        ))}
      </Stack>
    </div>
  );
};

export default NewsFeed;