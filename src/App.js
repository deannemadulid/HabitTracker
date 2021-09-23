import React from 'react'
import ReactDOM from 'react-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './components/Home'


import {
  BrowserRouter as Router,
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
    </div>
  );
}

export default App;
