import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home,SignIn} from "./pages";



function App() {
  return (
  <Router>
      <Switch>
         <Route exact path={[ "/" , "/recipes" ]}>
           <Home />
         </Route>
         <Route exact path="/signup">
           <SignIn />
         </Route>
      </Switch>
    </Router>
  );
}

export default App;
