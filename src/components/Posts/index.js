import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core';
import useStylePosts from './styles';
import Post from './Post';

export default function Posts() {
  const selector = useSelector(state => state.post);
  const styleClass = useStylePosts();
  return (
    selector.length === 0 ?
      <CircularProgress /> :
      <Grid className={styleClass.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={2}  >
        {
          selector.map((post) =>
            <Grid key={post._id} item xs={12} sm={4}>
              <Post post={post} />
            </Grid>
          )
        }
      </Grid>
  )
}
