// navItem react/ redux imports
import React, { useState } from "react";

// Components
import Login from "../../Auth/loginAuth";
import SignUp from "../../Auth/signupAuth";

// Mui components
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./mui"


const AuthForm = () => {
    const [open, setOpen] = useState(false)
    const [form, set_ModalForm] = useState("Login")
    const classes = useStyles()
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        set_ModalForm("Login")
        setOpen(false);
    }

    const title = form === "Login" ? "Login" : "Sign up";
    const formToDisplay =
        form === "Login" ? (
            <Login handleClose={handleClose} set_ModalForm={set_ModalForm} />
        ) : (
                <SignUp handleClose={handleClose} set_ModalForm={set_ModalForm} />
            )
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
    )
}

export default AuthForm

