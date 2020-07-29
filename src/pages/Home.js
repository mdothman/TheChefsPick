import React, { Fragment } from 'react';
import {Header,Footer,Results} from "../components";
import Paper from '@material-ui/core/Paper';

export default function Home(){
    return (
        <Fragment>
          <Header />
          <Paper><h1>History in the making</h1></Paper>
          <Results />
          <Footer />
        </Fragment>
      );

    
}