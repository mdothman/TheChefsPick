import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs,Tab} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
    position:'relative',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export default function Footer({setPage,page}) {
  const classes = useStyles();
  

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setPage(newValue);
    console.log(newValue)
    return page
  };

  return (

      <div className={classes.root}>
      <Tabs
        value={page}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Search " href='/'/>
        <Tab label="Recipes" href='/recipes' />
      </Tabs>
    </div>
    
  );
}
