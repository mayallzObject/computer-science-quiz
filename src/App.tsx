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



  const darkTheme = createMuiTheme({

    palette: {
      primary: {
        light: "#00000",
        main: "#ffa07a",
        dark: "#00000", // button hovering color when in dark
      },
      secondary: {
        light: "#00000",
        main: "#B0B0B0",
        dark: "#CBCACA",
      },

      type: "dark",
      background: { paper: "#0000" },
    },
  })

  const lightTheme = createMuiTheme({

    palette: {
      primary: {
        light: "#ffa07a",
        main: "#00000",
        dark: "#ffa07a",
      },
      secondary: {
        light: "#474747",
        main: "#B0B0B0",
        dark: "#CBCACA",
      },

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

