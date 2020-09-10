import React from 'react';
import {Container, Card, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root:{
      flexGrow: 1,
      padding: '0 30px',
    }
  }));

export default function InfoCard(){
    const classes = useStyles();
    return(
 // This is my informational card to help user navigate page.
  <Container className={classes.root} maxWidth="md">
  <Card container xs={12}>
    <Typography component="h1" variant="h2" align="center" color="textPrimary" >
      You're the Chef, so take your pick!
      </Typography>
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
      Use the search function to look up different recipes for what is in your kitchen
    </Typography>
  </Card>
  </Container>
    )
} 