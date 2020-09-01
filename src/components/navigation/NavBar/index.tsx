
import React from "react";

import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import AuthForm from "../AuthForm"
import Logout from "../../Auth/logoutAuth"



import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import makeStyles from "@material-ui/core/styles/makeStyles"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import { selectUser } from "../../../store/user/selectors"
import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp'
import { Button } from "@material-ui/core";

import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';

import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {

    },
    title: {
        flexGrow: 1,
    },
    darkButton: {


    },
    icon: {
        alignSelf: "center",
        textAlign: "center"
    },
    button: {
        margin: 4,
        fontSize: 30,
        fontWeight: "bold",
        color: "#6BCAE2",
        backgroundImage: "url(https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-740x463.jpg)",
        "&:hover": {
            blurRadius: "true",
            color: "#000000",
            backgroundColor: "url(https://scx1.b-cdn.net/csz/news/800/2018/space.jpg)"
        },
    },
}))

type Props = {
    darkMode: boolean
    set_darkMode: (value: boolean) => void
}

const NavBar = (props: Props) => {
    const user = useSelector(selectUser)
    const classes = useStyles()
    console.log("This are the props :", props)
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
            )
        } else {
            return (
                <IconButton
                    onClick={(e) => props.set_darkMode(true)}
                    className={classes.menuButton}
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <BeachAccessIcon fontSize="small" />
                </IconButton>
            )
        }
    }
    return (

        <AppBar >
            <Toolbar style={{ height: 100, marginTop: 10 }}>

                <Box display="flex" alignItems="center"
                    justifyContent="flex-end">
                    {user.token ? <Logout user={user} />
                        : <AuthForm />}
                </Box>

                <Button
                    startIcon={<PlayCircleOutlineRoundedIcon fontSize="large" />}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    component={NavLink} to="/"
                >
                </Button>
                <Button
                    startIcon={<AirplanemodeActiveIcon fontSize="large" />}
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    component={NavLink} to="/weekly-race"
                >
                </Button>
                <Box ml={2}>
                    {darkModeButton()}
                </Box>
            </Toolbar>
        </AppBar>

    )
}


export default NavBar
