import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import MessageBox from "./components/MessageBox";
import Loading from "./components/loading";
import NavBar from "./components/navigation/NavBar";
import AboutMe from "./pages/AboutMe";
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
      default: "#9c968b",
      paper: "#978d58",
    },
    primary: {
      main: "#3c4f65",
      dark: "#978d58",
    },
    type: "light",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    background: {
      default: "#3c4f65",
      paper: "#33313b",
    },
    primary: {
      main: "#834c69",
      dark: "#3c4f65 ",
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
      <Container disableGutters={true}>
        <Paper>
          <CssBaseline />
          <NavBar darkMode={darkMode} set_darkMode={set_darkMode} />
          <MessageBox />
        </Paper>
        {isLoading ? <Loading /> : null}
        <Switch>
          <Route path="/about-me" component={AboutMe} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
