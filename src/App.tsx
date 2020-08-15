import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom"

//? Components
import NavBar from './components/Navigation'
import Question from './components/QuestionCard/index'

import Home from './pages/Home'
import LoginPage from './pages/Login'
import SingupPage from './pages/Signup'
import ScoreboardPage from './pages/Scoreboard'

//? MUI components
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch';
import { ThemeProvider, Theme } from '@material-ui/core/styles'
import { createMuiTheme } from "@material-ui/core/styles"
import { useDispatch } from "react-redux"

import { loadUser } from './store/user/actions'
const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(loadUser())
  }, [dispatch])



  const [darkMode, setDarkMode] = useState(false)
  const theme: Theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <NavBar />

        <Route exact path="/scoreboard" component={ScoreboardPage} />
        <Route exact path="/questions" component={Question} />
        <Route exact path="/signup" component={SingupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/:me" component={Home} />
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Paper>
    </ThemeProvider>
  )
}

export default App
