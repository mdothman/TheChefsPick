import React, { Fragment } from 'react';
import {Header,Footer,Results} from "../components";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor:"inherit"
  },
});

export default function Home(){

  const classes = useStyles()
  
  return (
        <Fragment>
          <Header />
          <Typography className={classes.root} variant="h3" color="inherit" >You're the Chef, so take your pick!</Typography>
          <Results />
          <Footer />
        </Fragment>
      );

    
}