import { Theme, makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      alignItems: "center",
    },
    media: {
      paddingTop: "56.25%", // 16:9
      minHeight: 500,

      alignItems: "center",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    button: {
      margin: 4,
      fontFamily: "Kaushan Script",
      fontWeight: "bold",

      "&:hover": {
        color: "yellow",
      },
    },
    header: {
      color: "#ffd3b6",
      fontFamily: "Kaushan Script",
      fontSize: "1.7rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
      fontWeight: "bold",
      marginTop: 30,
    },
    backHeader: {
      backgroundColor: theme.palette.primary.light,
      fontFamily: "'Rokkitt', serif",
    },
    smHeader: {
      backgroundColor: theme.palette.primary.light,
      fontFamily: "'Rokkitt', serif",
    },
  })
);
