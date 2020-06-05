import React from 'react';
import './App.css';
import { Home, Course } from './Pages/js'
import { Hamburger } from './Components/js'
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

export default ()=>{

  return (
    <Router>
      <div className="App">
        <Hamburger/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/course' component={Course}/>
        </Switch>
      </div>
    </Router>
  );
}
