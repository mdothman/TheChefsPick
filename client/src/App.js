import React, { Fragment } from 'react';
import {Header,Footer,Results} from "./components/";
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <Fragment>
      <Header />
      <Paper><h1>History in the making</h1></Paper>
      <Results />
      <Footer />
    </Fragment>
  );
}

export default App;
