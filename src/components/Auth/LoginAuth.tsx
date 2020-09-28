import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux Store
import { login } from "../../store/user/actions";
import { loadUser } from "../../store/user/actions";

// Types
import { OnClick } from "../../types/eventType";

//Mui components
import { makeStyles, Theme } from "@material-ui/core/styles";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  dialogFooter: {
    fontSize: "0.8rem",

    width: "100%",
    textAlign: "center",
  },
}));

type Props = {
  handleClose: (value: string) => void;
  set_ModalForm: (value: string) => void;
};

const Login = (props: Props) => {
  const dispatch = useDispatch();

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
        color="primary"
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
