import  React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Post from './posts/Post';

// get posts create post with each post put them in stack
const NewsFeed = ({ }) => {
  const [news, setNews] = useState([]);
  
  return (
    <div className='news__feed'>
      <Stack>
        <Post />
      </Stack>
    </div>
  );
};

export default NewsFeed;