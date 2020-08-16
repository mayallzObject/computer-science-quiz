// import React from 'react';
// import { Link } from 'react-router-dom';

// //? MUI Components
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import Switch from '@material-ui/core/Switch';


// const NavBar = () => {
//     return (
//         <div>
//             <AppBar position="static">
//                 <Toolbar>
//                     <Switch />
//                     <Button component={Link}
//                         color="inherit" to={'/'}>Home</Button>

//                     <Button component={Link}
//                         color="inherit" to={'/login'}>login</Button>

//                     <Button component={Link}
//                         color="inherit" to={'/signup'}>sing up</Button>

//                     <Button component={Link}
//                         color="inherit" to={'/scoreboard'}>Scoreboard</Button>

//                     <Button component={Link}
//                         color="inherit" to={'/questions'}>Game</Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }

// export default NavBar

import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login";
import SignUp from "./Signup";
import { NavLink } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    btn: {
        fontWeight: "bold",
        color: "#aa0d00",
        backgroundColor: "#ffffff",
        "&:hover": {
            color: "#000000",
            backgroundColor: "#ffa000",
        },
    },
}));



export default function AuthModal() {
    const [open, setOpen] = useState(false);
    const [modalForm, set_modalForm] = useState("Login");
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        set_modalForm("Login");
        setOpen(false);
    };

    const title = modalForm === "Login" ? "Login" : "Sign up";
    const formToDisplay =
        modalForm === "Login" ? (
            <Login handleClose={handleClose} set_modalForm={set_modalForm} />
        ) : (
                <SignUp handleClose={handleClose} set_modalForm={set_modalForm} />
            );
    return (
        <Paper>
            <Button component={NavLink} to={'/scoreboard'}>
                Scoreboard
             </Button>
            <Button component={NavLink} to={'/home'}>
                Play Cool-Trivia
             </Button>
            <Button className={classes.btn} onClick={handleOpen}>
                Login
            </Button>
            <Dialog
                className={classes.root}
                open={open}
                onClose={handleClose}
                aria-labelledby="auth-modal-login-signup"
                aria-describedby="auth-modal-login-signup"
            >
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                {formToDisplay}
            </Dialog>
        </Paper >
    );
}