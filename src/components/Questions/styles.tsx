import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      align: "center",
      width: "100%",
      fontFamily: "Kaushan Script",
    },
    card: {
      alignItems: "center",
      fontFamily: "Kaushan Script",
      square: "false",
    },
    title: {
      fontSize: 27,
      fontWeight: "bold",
      alignItems: "center",
      fontFamily: "Kaushan Script",
      color: "#ffffff",
      backgroundColor: "#33313b",
      borderRadius: 360,
      padding: 25,
    },

    button: {
      fontSize: 15,
      padding: 5,
      minWidth: 200,
      elavation: 23,
      margin: 10,
      borderColor: "coral",
      color: "#ffffff",
      backgroundColor: "#005e4b",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        color: "#28784b",
        backgroundColor: "#ffffff",
      },
    },
    submitButton: {
      fontSize: 13,
      padding: 10,
      minWidth: 200,
      elavation: 23,
      margin: 10,
      color: "white",
      backgroundColor: "#28784b",
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        color: "#28784b",
        backgroundColor: "white",
      },
    },
    actionButton: {
      fontSize: 13,
      padding: 10,
      minWidth: 200,
      elavation: 23,
      margin: 10,

      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: "#28784b",
      },
    },
  })
);

export const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.secondary",
  m: 1,
  border: 1,
  style: { width: "5rem", height: "5rem" },
};
