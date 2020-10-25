import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Header,Footer}from './components'
import {Home,RecipeCardHolder} from "./pages";



function App() {
  const [page, setPage] = useState(0)
  return (
  <Router>
      
    <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/">
         {page===0?<Home />:<RecipeCardHolder />}
        </Route>
      </Switch>
    </div>
      <Footer setPage={setPage} page={page}/>
    </div>
         
    </Router>
  );
}

export default App;
