import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import AuthForm from "../AuthForm";
import Logout from "../../Auth/logoutAuth";

// TypeScript
import { Props } from "./types";

//Mui components
import Brightness2SharpIcon from "@material-ui/icons/Brightness2Sharp";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { selectUser } from "../../../store/user/selectors";
import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import { Button, Tooltip, Fade } from "@material-ui/core";
import { useStyles } from "./styles";

const NavBar = (props: Props) => {
  const user = useSelector(selectUser);
  const classes = useStyles();

  function darkModeButton() {
    if (props.darkMode) {
      return (
        <IconButton
          onClick={(e) => props.set_darkMode(false)}
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <WbSunnySharpIcon fontSize="small" />
        </IconButton>
      );
    } else {
      return (
        <IconButton
          onClick={(e) => props.set_darkMode(true)}
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <Brightness2SharpIcon fontSize="small" />
        </IconButton>
      );
    }
  }
  return (
    <AppBar>
      <Toolbar>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          {user.token ? <Logout user={user} /> : <AuthForm />}
        </Box>

        <Tooltip
          color="primary"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title={<h1 style={{ fontFamily: "Kaushan Script" }}>Trivia Quiz</h1>}
        >
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            component={NavLink}
            to="/"
          >
            Play
          </Button>
        </Tooltip>

        <Box>{darkModeButton()}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
