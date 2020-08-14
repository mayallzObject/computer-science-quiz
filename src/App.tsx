import React from 'react'
import { Switch, Route } from "react-router-dom"

//? Components
import NavBar from './components/Navigation'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import SingupPage from './pages/Signup'
import ScoreboardPage from './pages/Scoreboard'


const App = () => {

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/Scoreboard" component={ScoreboardPage} />
        <Route exact path="/singup" component={SingupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/:me" component={Home} />
      </Switch>
    </>
  )
}

export default App
