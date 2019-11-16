import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  HomePage from '../components/HomePage/HomePage';
import  App  from '../components/App/App'
import Login from '../components/Login/Login'

const MainRoute = () => {
  return (
    <Router>
      
        <Route exact path="/" component={App} />
        <Route exact path="/HomePage" component={HomePage} />
      
    </Router>
  )
}

export default MainRoute;