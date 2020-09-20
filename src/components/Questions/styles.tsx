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
      fontSize: "1rem",
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
      fontFamily: "'Rokkitt', serif",
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: "0.6rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.8rem",
      },
      backgroundColor: theme.palette.primary.dark,
      color: "gold",
      padding: 10,
      elavation: 23,
      margin: 5,
      width: 230,
      fontWeight: "bold",

      "&:hover": {
        color: "yellow",
        backgroundColor: theme.palette.primary.main,
      },
    },
    submitButton: {
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: "0.6rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.8rem",
      },
      padding: 10,
      elavation: 23,
      borderRadius: 360,
      width: 200,
      color: "gold",
      backgroundColor: theme.palette.primary.main,
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        color: "yellow",
      },
    },
    actionButton: {
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: "0.6rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.8rem",
      },
      padding: 10,
      elavation: 23,
      width: 200,
      borderRadius: 360,
      color: "gold",
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
    number: {
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
      color: "#ffffff",
      fontFamily: "'Rokkitt', serif",
    },
    score: {
      fontWeight: "bold",
      fontFamily: "'Rokkitt', serif",
      padding: 10,
      alignItems: "center",

      color: "#f4a460",
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.6rem",
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
