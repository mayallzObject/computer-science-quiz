// 
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../../store/user/actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { OnClick } from "../../types/eventType";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    dialogFooter: {
        fontSize: "0.8rem",
        width: "100%",
        textAlign: "center",
    },
}))



//! Props ANY !?!
const Login = (props: any) => {
    const classes = useStyles();
    const { set_ModalForm } = props
    const dispatch = useDispatch()
    const initialState = { email: "", password: "" }
    const [credentials, set_credentials] = useState(initialState);

    function submitForm(event: OnClick): void {
        event.preventDefault();
        dispatch(login(credentials))

        set_credentials(initialState)
    }

    return (
        <DialogContent>
            <TextField
                autoFocus
                value={credentials.email}
                onChange={(event) =>
                    set_credentials({
                        ...credentials,
                        email: event.target.value,
                    })
                }
                type="email"
                label="Email address"
                fullWidth
                required
            />
            <TextField
                value={credentials.password}
                onChange={(event) =>
                    set_credentials({
                        ...credentials,
                        password: event.target.value,
                    })
                }
                type="password"
                label="Password"
                fullWidth
                required
            />
            <DialogActions>
                <Button variant="contained" color="primary" onClick={submitForm}>
                    Log in
                </Button>
            </DialogActions>
            <DialogContentText className={classes.dialogFooter}>
                Don't have an account yet? Sign up{" "}
                <Typography
                    component="span"
                    onClick={(e: OnClick) => set_ModalForm("Signup")}
                    style={{ cursor: "pointer" }}
                >
                    HERE
                </Typography>
            </DialogContentText>
        </DialogContent>
    )
}

export default Login
