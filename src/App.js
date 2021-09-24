import React from 'react'
import ReactDOM from 'react-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './components/Home'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
