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
      default: "#CFDBC5",
      paper: "#efdf70",
    },
    primary: {
      main: "#006400", // here you can change the NavBar and Button color ("primary")
      dark: "#003267", // change the hover effect background color
    },
    type: "light",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    background: {
      default: "#1b2b5e",
      paper: "#00688B",
    },
    primary: {
      main: "#ff69b4", // here you can change the NavBar and Button color ("primary")
      dark: "#D21404 ", // change the hover effect background color"
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
      <Paper>
        <CssBaseline />
        <NavBar darkMode={darkMode} set_darkMode={set_darkMode} />
        <Container disableGutters={true} maxWidth="xs">
          <MessageBox />
        </Container>
      </Paper>
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route path="/about-me" component={AboutMe} />
        <Route exact path="/weekly-race" component={WeeklyRace} />
        <Route exact path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
