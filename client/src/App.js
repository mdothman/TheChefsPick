import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home,SignIn} from "./pages";



function App() {
  return (
  <Router>
    <Fragment>
      <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/signup" component={SignIn}/>
      </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
