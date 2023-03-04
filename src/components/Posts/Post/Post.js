import React from 'react'
import useStyle from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'

const Post = ({post}) => {
    const classes = useStyle();
    console.log(post.data)
    const {selectedFile, creator, createdAt, likeCount, message, tags, title} = post.data;
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}  title={title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{creator}</Typography>
        <Typography variant='body2'>{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" ><MoreHorizIcon fontSize="medium" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" /> Like {likeCount} </Button>
        <Button size="small" color="primary" ><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  )
}

export default Post