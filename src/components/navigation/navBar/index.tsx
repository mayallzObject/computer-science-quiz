import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AuthForm from "../navItem"
import Logout from "../../Auth/Logout"

import Brightness7 from "@material-ui/icons/Brightness7"
import Brightness2 from "@material-ui/icons/Brightness2"
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { ButtonGroup } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import { selectUser } from "../../../store/user/selectors";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
    darkButton: {
        marginLeft: "2vw",
        marginBottom: "1vw"
    },
    btn2: {
        fontWeight: "bold",
        color: "#aa0d00",
        backgroundColor: "#ffffff",
        "&:hover": {
            color: "#000000",
            backgroundColor: "#ffff00",
        },
        scoreboard: {
        }
    },
}))


const NavBar = (props: any) => {
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
                    <Brightness7 fontSize="large" />
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
                    <Brightness2 fontSize="large" />
                </IconButton>
            )
        }
    }

    return (
        <Paper variant="elevation" color="primary">
            <AppBar position="static">
                <Toolbar>
                    <Box display="flex" alignItems="center"
                        justifyContent="flex-end">
                        {user.token ? <Logout user={user} />
                            : <AuthForm />}
                        {darkModeButton()}
                    </Box>

                    <Box display="flex" alignItems="center"
                        justifyContent="space-between"
                        width="100%" marginX={4}
                    >
                        <Box>
                            <IconButton className={classes.menuButton}
                                component={Link} to="/"
                                edge="start" color="inherit"
                                aria-label="menu"
                            ></IconButton>
                        </Box>
                    </Box>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button className={classes.btn2}
                            component={Link} to="/"
                        > Play
                    </Button>
                        <Button className={classes.btn2}
                            component={Link} to="/scoreboard"
                        > ScoreBoard
                    </Button>

                        <Button className={classes.btn2}
                            component={Link} to="/login"
                        > About
                </Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </Paper>
    )
}

export default NavBar
