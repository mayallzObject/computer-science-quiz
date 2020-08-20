
import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AuthForm from "../AuthForm"
import Logout from "../../Auth/logoutAuth"

//@ts-ignore
import { Banner, StaticBanner } from 'material-ui-banner';

import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import makeStyles from "@material-ui/core/styles/makeStyles"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import { selectUser } from "../../../store/user/selectors"
import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp'
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(5),
    },
    title: {
        flexGrow: 1,
    },
    darkButton: {
        marginLeft: "2vw",
        marginBottom: "1vw"
    },
    icon: {
        alignSelf: "center",
        textAlign: "center"
    },
    btn: {
        fontWeight: "bold",
        color: "#aa0d00",
        backgroundColor: "#ffffff",
        "&:hover": {
            color: "#000000",
            backgroundColor: "#ffff00",
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
                    <WbSunnySharpIcon fontSize="large" />
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
                    <BeachAccessIcon fontSize="large" />
                </IconButton>
            )
        }
    }
    return (
        <Paper variant="elevation" color="primary">
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        {"Cool"}<DeckRoundedIcon fontSize="large" />{"rivia"}
                    </IconButton>
                    <Box display="flex" alignItems="center"
                        justifyContent="space-between"
                        width="100%" marginX={4}
                    >
                    </Box>
                    <Box display="flex" alignItems="center"
                        justifyContent="flex-end">
                        {user.token ? <Logout user={user} />
                            : <AuthForm />}
                        {darkModeButton()}
                    </Box>
                </Toolbar>
            </AppBar>
        </Paper>
    )
}


export default NavBar
