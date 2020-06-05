import React from 'react';
import './App.css';
import { Home, CourseList, EventList } from './Pages/js'
import { Hamburger } from './Components/js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default ()=>{

  return (
    <Router>
      <div className="App">
        <Hamburger/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/courses' component={CourseList}/>
          <Route path='/events' component={EventList}/>
        </Switch>
      </div>
    </Router>
  );
}
