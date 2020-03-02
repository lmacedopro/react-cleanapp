import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from './components/Header';

//import Main from './pages/main';
import Banner from './components/Banner';
import BannerOutline from './components/BannerOutline';

const styles = () => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial, Helvetica, sans-serif',
    background: '#fafafa',
    color: '#333',
  },
});

const App = ({ classes }) => (

  <div className="App">
    <CssBaseline />
    <Grid container className={classes.root}>
      <Header />
      <Banner />
      <BannerOutline />
    </Grid>
  </div>
); 

export default withStyles(styles)(App);
