import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import MessageBox from "./components/MessageBox";
import Loading from "./components/loading";
import NavBar from "./components/navigation/NavBar";
import AboutMe from "./pages/AboutMe";
import WeeklyRace from "./pages/WeeklyRace";
import Home from "./pages/Homepage";

// Redux store
import { selectAppLoading } from "./store/appState/selectors";

// Mui components
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import { loadUser } from "./store/user/actions";
import Paper from "@material-ui/core/Paper";

const lightTheme = createMuiTheme({
  palette: {
    background: {
      default: "#ccd0d1",
      paper: "#C5B358",
    },
    primary: {
      main: "#006400",
      dark: "#002800",
    },
    type: "light",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    background: {
      default: "#584f3f",
      paper: "#00688B",
    },
    primary: {
      main: "#e0115f",
      dark: "#00688B ",
    },
    type: "dark",
  },
});
const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const [darkMode, set_darkMode] = useState(true);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch, darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container disableGutters={true} maxWidth="lg">
        <Paper>
          <CssBaseline />
          <NavBar darkMode={darkMode} set_darkMode={set_darkMode} />
          <MessageBox />
          {isLoading ? <Loading /> : null}
        </Paper>
        <Switch>
          <Route path="/about-me" component={AboutMe} />
          <Route exact path="/weekly-race" component={WeeklyRace} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
