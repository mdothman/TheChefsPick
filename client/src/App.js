import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Header,Footer}from './components'
import {Home} from "./pages";



function App() {
  return (
  <Router>
      
    <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
      <Footer />
    </div>
         
    </Router>
  );
}

export default App;
