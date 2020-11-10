import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const LoadingIndicator = props => {
    const classes = useStyles();
    const {promiseInProgress} = usePromiseTracker();
    return(
        promiseInProgress &&
        <div className={classes.root}>
        <CircularProgress />
        </div> 
    )
}

export default LoadingIndicator