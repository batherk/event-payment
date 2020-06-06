import React from 'react';
import './App.css';
import { Home, CourseList, Course, EventList, Event, CoursePass } from './Pages/js'
import { Hamburger } from './Components/js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default ()=>{

  return (
    <Router>
      <div className="App">
        <Hamburger/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/courses' exact component={CourseList}/>
          <Route path='/courses/:id' exact component={Course}/>
          <Route path='/events' exact component={EventList}/>
          <Route path='/events/:id' exact component={Event}/>
        </Switch>
      </div>
    </Router>
  );
}
