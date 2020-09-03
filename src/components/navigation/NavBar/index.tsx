import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import AuthForm from "../AuthForm";
import Logout from "../../Auth/logoutAuth";

//Mui components
import Brightness2SharpIcon from "@material-ui/icons/Brightness2Sharp";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { selectUser } from "../../../store/user/selectors";
import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import { Button, Tooltip, Fade, Theme } from "@material-ui/core";

import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";

import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
  },
  darkButton: {},
  icon: {
    alignSelf: "center",
    textAlign: "center",
  },
  button: {
    margin: 4,
    fontSize: 30,
    fontWeight: "bold",
    color: "#6BCAE2",
    backgroundImage:
      "url(https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-740x463.jpg)",
    "&:hover": {
      blurRadius: "true",
      color: "#000000",
      backgroundColor:
        "url(https://scx1.b-cdn.net/csz/news/800/2018/space.jpg)",
    },
  },
}));

type Props = {
  darkMode: boolean;
  set_darkMode: (value: boolean) => void;
};

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
          title={<h2>Trivia Quiz</h2>}
        >
          <Button
            startIcon={<PlayCircleOutlineRoundedIcon fontSize="large" />}
            className={classes.button}
            variant="contained"
            color="primary"
            component={NavLink}
            to="/"
          ></Button>
        </Tooltip>
        <Tooltip
          color="primary"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title={<h2>About us</h2>}
        >
          <Button
            startIcon={<AirplanemodeActiveIcon fontSize="large" />}
            className={classes.button}
            color="primary"
            variant="contained"
            component={NavLink}
            to="/about-us"
          ></Button>
        </Tooltip>
        <Box>{darkModeButton()}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
