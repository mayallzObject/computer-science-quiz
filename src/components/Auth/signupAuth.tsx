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

import { storage } from "../../FIrebase";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundImage:
      "url(http://quotesideas.com/wp-content/uploads/2015/05/Summer-Beach-Wallpaper-107.jpg)",
  },
  dialogFooter: {
    fontSize: "0.8rem",
    width: "100%",
    textAlign: "center",
    backgroundImage:
      "url(http://quotesideas.com/wp-content/uploads/2015/05/Summer-Beach-Wallpaper-107.jpg)",
  },
}));

const SingUp = (props: any) => {
  const classes = useStyles();
  const { handleClose, set_ModalForm } = props;
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();

  console.log(progress);
  const initialState = {
    name: "",
    email: "",
    password: "",
    userImg: "",
  };
  const [signUpcredentials, set_signUpcredentials] = useState(initialState);

  const uploadImage = async () => {
    try {
      //@ts-ignore
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            //@ts-ignore
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
            });
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e: any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  console.log("image: ", image);

  function submitForm(event: OnClick): void {
    event.preventDefault();
    console.log(`image: ${url}`);
    //@ts-ignore
    dispatch(signUp(signUpcredentials, url));
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
      <Button type="button" onClick={uploadImage}>
        Upload
      </Button>

      <input type="file" onChange={handleChange} />
      <img
        src={url || "http://via.placeholder.com/300"}
        alt="firebaseimage"
        style={{ width: "300px" }}
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
