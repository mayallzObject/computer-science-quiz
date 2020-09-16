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
      fontSize: 28,
      fontWeight: "bold",
      alignItems: "center",
      fontFamily: "Kaushan Script",
      backgroundColor: theme.palette.background.paper,
      borderRadius: 360,
      padding: 35,
    },

    button: {
      fontFamily: "'Rokkitt', serif",
      fontSize: 13,
      elavation: 23,
      margin: 5,
      minWidth: 200,
      maxWidht: 250,

      "&:hover": {
        color: "sandybrown",
        backgroundColor: "#33313b",
      },
    },
    submitButton: {
      fontSize: 13,
      padding: 10,
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
    smHeader: {
      backgroundColor: theme.palette.primary.main,
    },

    backButton: {
      alignContent: "center",
      fontSize: 13,
      padding: 10,
      margin: 20,
      backgroundColor: theme.palette.background.paper,

      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: theme.palette.primary.main,
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
