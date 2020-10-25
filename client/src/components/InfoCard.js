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
  <Container className={classes.root} maxWidth='lg'>
  <Card container={IDBCursorWithValue.toString()} xs={12}>
    <Typography component="h1" variant="h2" align="center" color="textPrimary" >
      Take your pick.

      </Typography>
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
     
      
    </Typography>
    <Typography variant="subtitle1" align="center" color="textPrimary" paragraph>
     
      Search using Spoonacular api
    </Typography>
  </Card>
  </Container>
    )
} 