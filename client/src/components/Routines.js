import React from 'react'
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';

import Routine from "./Routine/Routine";
import useStyles from './styles';

export default function Routines() {

  const routines = useSelector((state) => state.routines);
  const classes = useStyles();

  console.log(routines)

  return (
    !routines.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {routines.map((routine) => (
          <Grid key={routine._id} item xs={12} sm={6} md={6}>
            <Routine routine={routine} />
          </Grid>
        ))}
      </Grid>
    )
  )
}
