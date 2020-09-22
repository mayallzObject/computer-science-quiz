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
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.6rem",
      },
      fontWeight: "bold",
      alignItems: "center",
      fontFamily: "'Rokkitt', serif",
      backgroundColor: theme.palette.background.paper,
      borderRadius: 360,
      padding: 35,
    },

    button: {
      fontFamily: "'Robboto', monospace",
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: "0.6rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.9rem",
      },
      backgroundColor: theme.palette.primary.light,
      color: "#000000",
      padding: 10,
      elavation: 23,
      margin: 10,
      maxWidth: 320,
      minWidth: 200,
      fontWeight: "bold",

      "&:hover": {
        color: "yellow",
        backgroundColor: theme.palette.primary.dark,
      },
    },
    submitButton: {
      fontSize: "0.7rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.2rem",
      },
      padding: 10,
      margin: 5,
      elavation: 23,
      borderRadius: 360,
      width: 220,
      color: "gold",
      backgroundColor: theme.palette.primary.dark,
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: "yellow",
      },
    },
    actionButton: {
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
      padding: 10,
      elavation: 23,
      width: 220,
      borderRadius: 360,
      color: "yellow",
      backgroundColor: theme.palette.background.default,
      marginTop: 5,
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        color: theme.palette.background.default,
        backgroundColor: "yellow",
      },
    },
    smHeader: {
      backgroundColor: theme.palette.primary.main,
    },

    backButton: {
      alignContent: "center",

      borderRadius: 360,
      backgroundColor: theme.palette.background.paper,
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        color: "#ffffff",
      },
    },
    number: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.4rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
      color: "silver",
      fontFamily: "'Rokkitt', serif",
    },
    score: {
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      alignItems: "center",

      color: "gold",
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.6rem",
      },
    },
    answers: {
      backgroundColor: theme.palette.primary.light,
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
