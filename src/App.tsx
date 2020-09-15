import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Home from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";
import NavBar from "./components/navigation/NavBar";
import Loading from "./components/loading";
import MessageBox from "./components/MessageBox";

// Redux store
import { selectAppLoading } from "./store/appState/selectors";
import { loadUser } from "./store/user/actions";

// Mui components
import { ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import { lightTheme, darkTheme } from "./Theme";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const [darkMode, set_darkMode] = useState(false);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch, darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container disableGutters={true} maxWidth="lg">
        <CssBaseline />
        <NavBar darkMode={darkMode} set_darkMode={set_darkMode} />
        <MessageBox />

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
