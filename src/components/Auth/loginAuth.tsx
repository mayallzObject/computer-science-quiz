//
import React, { useState, useEffect } from "react";

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
import { loadUser } from "../../store/user/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  dialogFooter: {
    fontSize: "0.8rem",
    width: "100%",
    textAlign: "center",
    backgroundImage:
      "url(https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-740x463.jpg)",
  },
}));

//! Props ANY !?!
const Login = (props: any) => {
  const dispatch = useDispatch();
  console.log("WHATATATTA", props);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const classes = useStyles();
  const { set_ModalForm } = props;
  const initialState = { email: "", password: "" };
  const [credentials, set_credentials] = useState(initialState);

  function submitForm(event: OnClick): void {
    event.preventDefault();
    dispatch(loadUser());

    dispatch(login(credentials));

    set_credentials(initialState);
  }
  return (
    <DialogContent className={classes.dialogFooter}>
      <TextField
        color="primary"
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
        color="secondary"
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
      <DialogContentText className={classes.dialogFooter} color="secondary">
        No account yet? Sign up{" "}
        <Typography
          component="span"
          onClick={(e: OnClick) => set_ModalForm("Signup")}
          style={{ cursor: "pointer" }}
        >
          HERE
        </Typography>
      </DialogContentText>
    </DialogContent>
  );
};

export default Login;
