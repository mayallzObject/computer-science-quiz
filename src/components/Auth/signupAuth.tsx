import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Redux store
import { signUp } from "../../store/user/actions";

//Mui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { OnClick } from "../../types/eventType";

// import { storage } from "../../FIrebase";

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
}));

const SingUp = (props: any) => {
  const classes = useStyles();
  const { handleClose, set_ModalForm } = props;
  // const [image, setImage] = useState("");
  // const [url, setUrl] = useState("");
  // const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [signUpcredentials, set_signUpcredentials] = useState(initialState);

  function submitForm(event: OnClick): void {
    event.preventDefault();
    dispatch(signUp(signUpcredentials));
    handleClose();
    set_signUpcredentials(initialState);
  }
  return (
    <DialogContent className={classes.dialogFooter}>
      <TextField
        value={signUpcredentials.name}
        onChange={(event) =>
          set_signUpcredentials({
            ...signUpcredentials,
            name: event.target.value,
          })
        }
        type="text"
        autoFocus
        label="First name"
        fullWidth
        required
      />
      <TextField
        value={signUpcredentials.email}
        onChange={(event) =>
          set_signUpcredentials({
            ...signUpcredentials,
            email: event.target.value,
          })
        }
        type="email"
        label="Email address"
        fullWidth
        required
      />
      <TextField
        value={signUpcredentials.password}
        onChange={(event) =>
          set_signUpcredentials({
            ...signUpcredentials,
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
          Submit
        </Button>
      </DialogActions>
      <DialogContentText className={classes.dialogFooter}>
        Already have an account? Login{" "}
        <Typography
          component="span"
          onClick={(e: OnClick) => set_ModalForm("Login")}
          style={{ cursor: "pointer" }}
        >
          HERE
        </Typography>
      </DialogContentText>
    </DialogContent>
  );
};

export default SingUp;
