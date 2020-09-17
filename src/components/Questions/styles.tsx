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
      fontFamily: "'Rokkitt', serif",
      backgroundColor: theme.palette.background.paper,
      borderRadius: 360,
      padding: 35,
    },

    button: {
      fontFamily: "'Rokkitt', serif",
      fontSize: 14,
      padding: 10,
      elavation: 23,
      margin: 5,
      width: 200,

      backgroundColor: theme.palette.primary.dark,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "yellow",
      },
    },
    submitButton: {
      fontSize: 14,
      padding: 10,
      elavation: 23,
      margin: 5,
      borderRadius: 360,
      width: 200,
      color: "yellow",
      backgroundColor: theme.palette.primary.main,
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        color: "yellow",
      },
    },
    actionButton: {
      fontSize: 14,
      padding: 10,
      elavation: 23,
      margin: 5,
      width: 200,
      borderRadius: 360,
      backgroundColor: theme.palette.primary.dark,
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "yellow",
      },
    },
    smHeader: {
      backgroundColor: theme.palette.primary.main,
    },

    backButton: {
      alignContent: "center",
      padding: 10,
      borderRadius: 360,
      backgroundColor: theme.palette.background.paper,
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: theme.palette.background.default,
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
