import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
//import { useDispatch } from 'react-redux';

import useStyles from './styles';

export default function Routine({ routine }) {
  
  //const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={'https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1'} title={routine.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{routine.title}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small"><MoreHorizIcon fontSize="medium" /></Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{routine.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{routine.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" /> Like {routine.likeCount} </Button>
        <Button size="small" color="primary" ><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  )
}
