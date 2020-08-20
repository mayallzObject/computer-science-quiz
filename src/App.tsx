import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

// Components
import MessageBox from './components/MessageBox'
import Loading from './components/loading'
import NavBar from './components/navigation/NavBar'
import AboutMe from './pages/AboutMe'
import WeeklyRace from './pages/WeeklyRace'
import Home from './pages/Homepage'

// Redux store 
import { selectAppLoading } from './store/appState/selectors'
import Footer from './components/Footer';

// Mui components
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container, CssBaseline, } from "@material-ui/core"
import { loadUser } from './store/user/actions'
import Paper from '@material-ui/core/Paper'
import Banner from './components/BannerControls'




const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#32CD32",
      dark: "#3b5998",
    },
    type: "light",
  },
})

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#6BCAE2",
      dark: "#32CD32",
    },
    type: "dark",
  },
})

const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectAppLoading);
  const [darkMode, set_darkMode] = useState(true);

  useEffect(() => {
    dispatch(loadUser())

  }, [dispatch, darkMode])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper>
        <CssBaseline />
        <NavBar darkMode={darkMode} set_darkMode={set_darkMode} />

        <Container disableGutters={true} maxWidth="xs">
          <MessageBox />
        </Container>
        {isLoading ? <Loading /> : null}
      </Paper>
      <Switch>
        <Route path="/about-me" component={AboutMe} />
        <Route exact path="/weekly-race" component={WeeklyRace} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </ThemeProvider>

  )
}

export default App

