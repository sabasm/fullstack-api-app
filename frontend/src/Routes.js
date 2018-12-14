import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './components/landing/Home';
import Profile from './components/Profile';
import AuthPage from './components/auth/AuthPage';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route path="/auth/signup" component={AuthPage}/>
    <Route path="/auth/login" component={AuthPage}/>
    <Route path="/auth/logout" component={AuthPage}/>
    <Route path="/profile" component={Profile}/>
  </Switch>
)

export default Routes;