import React from 'react'
import { Switch, Route } from "react-router-dom"

//? Components
import NavBar from './components/Navigation'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import SingupPage from './pages/Signup'
import ScoreboardPage from './pages/Scoreboard'
import { useTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { ThemeProvider, createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from "@material-ui/core/styles"



export const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
})

const App = () => {



  const theme = useTheme()
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <NavBar />
        <Switch>
          <Route exact path="/Scoreboard" component={ScoreboardPage} />
          <Route exact path="/signup" component={SingupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/:me" component={Home} />
        </Switch>
      </Paper>
    </ThemeProvider>
  )
}

export default App
