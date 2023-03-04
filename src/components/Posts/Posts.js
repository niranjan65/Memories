import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyle from './styles'
import { Grid, CircularProgress } from '@material-ui/core'

const Posts = () => {
  const posts = useSelector((state)=>state.post);
    const clases = useStyle();
    console.log(posts);
  return (
    !posts.length ? <CircularProgress/> : (
      <Grid className={clases.mainContainer} container alignItems='stretch' spacing={3}>
          {
            posts.map((post)=>(
              <Grid key={post.data._id} item xs={12} sm={6}>
                <Post post={post}/>
              </Grid>
            ))
          }
      </Grid>
    )
  )
}

export default Posts