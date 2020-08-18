import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

// Components
import MessageBox from './components/messageBox'
import Loading from './components/loading'
import NavBar from './components/navigation/navBar'
import AboutMe from './pages/AboutMe'
import WeeklyRace from './pages/WeeklyRace'
import Home from './pages/Homepage'

// Mui components
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container, CssBaseline } from "@material-ui/core"
import { loadUser } from './store/user/actions'
import Paper from '@material-ui/core/Paper'

// Redux store 
import { selectAppLoading } from './store/appState/selectors'



const App = () => {
  const isLoading = useSelector(selectAppLoading);
  const dispatch = useDispatch()
  const [darkMode, set_darkMode] = useState(true);



  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#900603",
        dark: "#3b5998", // button hovering color in light mode
      },

      type: "light",
    },
  })

  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#3b5998",
        dark: "#CCCC00", // button hovering color when in dark
      },
      type: "dark",
    },
  })

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch, darkMode])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

      <CssBaseline />
      <NavBar darkMode={darkMode} set_darkMode={set_darkMode} />
      <Paper>
        <Container disableGutters={true} maxWidth="xs">
          <MessageBox />
          {isLoading ? <Loading /> : null}
        </Container>

        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/weekly-race" component={WeeklyRace} />
        <Route exact path="/" component={Home} />
      </Paper>
    </ThemeProvider>
  )
}

export default App
