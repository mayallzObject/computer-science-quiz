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
        fontSize: "1.9rem",
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
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.secondary.light,
      padding: 10,
      elavation: 23,
      margin: 10,
      maxWidth: 350,
      minWidth: 200,
      fontWeight: "bold",

      "&:hover": {
        color: theme.palette.secondary.dark,
        backgroundColor: theme.palette.background.paper,
      },
    },
    submitButton: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.2rem",
      },
      padding: 5,
      elavation: 23,
      width: 200,
      borderRadius: 360,
      color: theme.palette.background.paper,
      backgroundColor: theme.palette.secondary.dark,

      margin: 5,
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        color: theme.palette.background.paper,
        backgroundColor: theme.palette.secondary.dark,
      },
    },
    actionButton: {
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
      },
      padding: 5,
      elavation: 23,
      width: 200,
      borderRadius: 360,
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.background.paper,

      margin: 5,
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        color: theme.palette.background.paper,
        backgroundColor: theme.palette.secondary.dark,
      },
    },
    smHeader: {
      backgroundColor: theme.palette.primary.main,
    },

    backButton: {
      alignContent: "center",

      borderRadius: 360,
      backgroundColor: theme.palette.background.default,
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
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

      color: theme.palette.secondary.light,
      fontSize: "1.2rem",
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
