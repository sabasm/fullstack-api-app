import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './components/landing/Home';
import Profile from './components/Profile';
import AuthPage from './components/auth/AuthPage';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route exact path="/auth/signup" component={AuthPage}/>
    <Route exact path="/auth/login" component={AuthPage}/>
    <Route exact path="/profile" component={Profile}/>
  </Switch>
)

export default Routes;