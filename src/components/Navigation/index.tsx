import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login";
import SignUp from "./Signup";




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
            backgroundColor: "#ffff00",
        },
        scoreboard: {

        }
    },
}))

export default function AuthForm() {
    const [open, setOpen] = useState(false);
    const [form, set_ModalForm] = useState("Login");
    const classes = useStyles();


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        set_ModalForm("Login");
        setOpen(false);
    };

    const title = form === "Login" ? "Login" : "Sign up";
    const formToDisplay =
        form === "Login" ? (
            <Login handleClose={handleClose} set_ModalForm={set_ModalForm} />
        ) : (
                <SignUp handleClose={handleClose} set_ModalForm={set_ModalForm} />
            );
    return (
        <div>
            <Paper>
                <Button className={classes.btn} onClick={handleOpen}>
                    LOGIN
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




            </Paper>


        </div>
    );
}