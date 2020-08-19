
import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AuthForm from "../navItem"
import Logout from "../../Auth/logoutAuth"

//@ts-ignore
import { Banner, StaticBanner } from 'material-ui-banner';

import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import makeStyles from "@material-ui/core/styles/makeStyles"
import IconButton from "@material-ui/core/IconButton"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import { selectUser } from "../../../store/user/selectors"
import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp'
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
import { Card } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(1),
    },
    title: {
        flexGrow: 2,
    },
    darkButton: {
        marginLeft: "1vw",
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
                        {"Cool "}<DeckRoundedIcon fontSize="large" />{"Trivia"}
                    </IconButton>

                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button className={classes.btn}
                            component={Link} to="/"
                        > Play
                    </Button>
                        <Button className={classes.btn}
                            component={Link} to="/weekly-race"
                        > Race
                    </Button>
                        <Button className={classes.btn}
                            component={Link} to="/About-me"
                        > Me
                    </Button>
                    </ButtonGroup>
                    <Box display="flex" alignItems="center"
                        justifyContent="space-between"
                        width="100%" marginX={4}
                    >
                        <Box display="flex" alignItems="center"
                            justifyContent="flex-end">
                            {user.token ? <Logout user={user} />
                                : <AuthForm />}
                            {darkModeButton()}
                        </Box>
                        <IconButton className={classes.menuButton}
                            component={Link} to="/"
                            edge="start" color="inherit"
                            aria-label="menu"
                        >
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* <Banner
                icon={<Card>

                </Card>}
                label="Text goes here"
                open
            /> */}
        </Paper>
    )
}


export default NavBar
