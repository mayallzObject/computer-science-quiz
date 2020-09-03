import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import MessageBox from "./components/MessageBox";
import Loading from "./components/loading";
import NavBar from "./components/navigation/NavBar";
import AboutMe from "./pages/AboutMe";
import AboutUs from "./pages/AboutUs";
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
      default: "#eae1e1",
      paper: "#978d58",
    },
    primary: {
      main: "#0b5269",
      dark: "#002800",
    },
    type: "light",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    background: {
      default: "#3b5249",
      paper: "#1a2f4b",
    },
    primary: {
      main: "#902424",
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
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
