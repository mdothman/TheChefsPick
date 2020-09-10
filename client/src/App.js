import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home,SignIn} from "./pages";



function App() {
  return (
  <Router>
      <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/signup" component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
