import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Tabs,Tab} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 'auto',
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
    return value
  };

  return (
    <Paper>
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
    </Paper>
    
  );
}
