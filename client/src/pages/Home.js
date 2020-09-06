import React, { Fragment } from 'react';
import {Header,Footer,Results} from "../components";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  infoCard: {
    width: '100%',
    maxWidth: 500,
    flexGrow:1,
    position:"static",
  
  },
});

export default function Home(){

  const classes = useStyles()
  
  return (
        <Fragment>
          <Header />
          <Results />
          <Footer />
        </Fragment>
      );

    
}