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
      backgroundImage:
        "url(https://a-static.besthdwallpaper.com/sphinx-and-the-pyramid-of-giza-oil-on-canvas-wallpaper-640x960-6798_169.jpg)",
      "&:hover": {
        color: "sandybrown",
      },
    },
    header: {
      height: 300,
      flexgrow: 1,
      color: "sandybrown",

      fontFamily: "Kaushan Script",
      fontSize: "2.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.5rem",
      },
      fontWeight: "bold",
      padding: 40,
      backgroundImage:
        "url(https://a-static.besthdwallpaper.com/sphinx-and-the-pyramid-of-giza-oil-on-canvas-wallpaper-640x960-6798_169.jpg)",
    },
    backHeader: {
      backgroundColor: theme.palette.primary.main,
      fontFamily: "Kaushan Script",
    },
    smHeader: {
      backgroundColor: theme.palette.primary.main,
      fontFamily: "Kaushan Script",
    },
  })
);
