import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

//Redux store
import { logOut } from "../../store/user/actions";

//Mui components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Button, Avatar, Tooltip, Fade } from "@material-ui/core";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: 5,
      padding: 5,
      iconSize: 13,
      fontWeight: "bold",
      fontFamily: "'Rokkitm', serif",
      color: "#ffffff",
      backgroundImage:
        "url(https://a-static.besthdwallpaper.com/sphinx-and-the-pyramid-of-giza-oil-on-canvas-wallpaper-640x960-6798_169.jpg)",
      "&:hover": {
        color: "gold",
        backgroundColor: theme.palette.primary.main,
      },
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

const Logout = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Avatar
        aria-label="userImg"
        className={classes.avatar}
        src={props.user.userImg}
      ></Avatar>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title={<h1 style={{ fontFamily: "Kaushan Script" }}>LOGOUT</h1>}
      >
        <Button
          startIcon={<ExitToAppRoundedIcon />}
          className={classes.button}
          variant="contained"
          onClick={() => dispatch(logOut())}
        >
          Out
        </Button>
      </Tooltip>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title={<h1 style={{ fontFamily: "Kaushan Script" }}>My Page</h1>}
      >
        <Button
          className={classes.button}
          startIcon={<FaceRoundedIcon />}
          variant="contained"
          component={NavLink}
          to="/about-me"
        >
          mypage
        </Button>
      </Tooltip>
    </>
  );
};

export default Logout;
