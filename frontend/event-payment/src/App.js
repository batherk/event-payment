import React from 'react';
import './App.css';
import { Home } from './Pages/js'
import { Hamburger } from './Components/js'
import { BaseRouter as Router, Switch, Link, Route} from 'react-router-dom'

export default ()=>{

  return (
    <Router>
      <div className="App">
        <Hamburger/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}
