import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

//? Components


import Home from './pages/Home'
import LoginPage from './pages/Login'
import ScoreboardPage from './pages/Scoreboard'

//? MUI components
import Paper from '@material-ui/core/Paper'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container, CssBaseline } from "@material-ui/core"

import { loadUser } from './store/user/actions'

import ClickAppBar from './components/Navigation/NavBar'
import { selectAppLoading } from './store/appState/selectors'
import MessageBox from './components/MessageBox'
import Loading from './components/Loading/Loading'



const App = () => {
  const isLoading = useSelector(selectAppLoading);
  const dispatch = useDispatch()
  const [darkMode, set_darkMode] = useState(false);



  const lightTheme = createMuiTheme({
    palette: {
      primary: {

        main: "#3b5998",
        dark: "#890000", // button hovering color in light mode
      },

      type: "light",
    },
  })

  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#DB6666",
        main: "#AA0D00",
        dark: "#242424", // button hovering color when in dark
      },


      type: "dark",
      background: { paper: "#0000" },
    },
  })


  useEffect(() => {

    dispatch(loadUser())
  }, [dispatch, darkMode])



  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper style={{ height: "100vh" }} >

        <CssBaseline />
        <ClickAppBar darkMode={darkMode} set_darkMode={set_darkMode} />
        {/* <NavBar /> */}
        <Paper>
          <Container disableGutters={true} maxWidth="xs">

            <MessageBox />

            {isLoading ? <Loading /> : null}
          </Container>
        </Paper>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/scoreboard" component={ScoreboardPage} />
        <Route exact path="/" component={Home} />
        {/* <Route path="/scoreboard" component={ScoreboardPage} />
        <Route path="/signup" component={SingupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/:me" component={Home} /> */}
      </Paper>
    </ThemeProvider>
  )
}

export default App

