import  React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Post from './posts/Post';

// get posts create post with each post put them in stack
const NewsFeed = ({ posts }) => {
  const [news, setNews] = useState([])

  return (
    <div className='news__feed'>
      <Stack spacing={{ xs: 3 }} direction='column-reverse'>
        {posts.map((post) => (
          <Post key={post.id} first_name={post.first_name} last_name={post.last_name} body={post.body}/>
        ))}
      </Stack>
    </div>
  );
};

export default NewsFeed;