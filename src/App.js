import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import './App.css'

const App = _ => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  )
}

export default App