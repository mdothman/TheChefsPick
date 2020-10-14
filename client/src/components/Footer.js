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

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
    return value
  };

  return (

      <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Search Results" />
        <Tab label="Recipe Card Holder" />
      </Tabs>
    </div>
    
  );
}
