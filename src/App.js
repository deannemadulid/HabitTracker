import React from 'react'
import ReactDOM from 'react-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Landing from './components/Landing/Landing'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Dashboard from './components/Dashboard/Dashboard'

import {
  Switch,
  Route,
  Link,
  Redirect,
  useRouterMatch,
  useHistory,
} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavigationBar />
      
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
