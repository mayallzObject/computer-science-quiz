import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Redux Store
import { selectMessage } from "../../store/appState/selectors";
import { clearMessage } from "../../store/appState/actions";

//Mui components
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MessageBox = () => {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <Snackbar
      open={showMessage}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      //@ts-ignore
      onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
    >
      <Alert
        onClose={() => dispatch(clearMessage())}
        //@ts-ignore
        severity={message.variant}
      >
        {/* 
                 // @ts-ignore */}
        <h1>{message.text}</h1>
      </Alert>
    </Snackbar>
  );
};

export default MessageBox;
