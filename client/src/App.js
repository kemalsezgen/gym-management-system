import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getRoutines } from './actions/routines';
import Form from "./components/Form/Form";
import Routines from "./components/Routines";
import useStyles from './styles';

function App() {

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch])

  return (
    <Container maxWidth="lg" >
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Routines</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Routines />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container >
  );
}

export default App;
