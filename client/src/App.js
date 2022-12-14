import {React, useEffect} from 'react';
import {Container, Typography, Grow, Grid, AppBar} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';

import memoriesImage from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';


const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container max-width="lg">
      <AppBar className={classes.appBar} position="static" color='inherit' >
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memoriesImage} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid justifyContent="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7} >
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4} >
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
