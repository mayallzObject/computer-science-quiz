import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: 5,
      padding: 5,
      iconSize: 13,
      fontWeight: "bold",
      fontFamily: "'Rokkitm', serif",
      color: "#ffffff",
      backgroundImage:
        "url(https://a-static.besthdwallpaper.com/sphinx-and-the-pyramid-of-giza-oil-on-canvas-wallpaper-640x960-6798_169.jpg)",
      "&:hover": {
        color: "gold",
        backgroundColor: theme.palette.primary.main,
      },
    },

    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: 10,
    },
    title: {
      flexGrow: 1,
    },
    darkButton: {},
    icon: {
      alignSelf: "center",
      textAlign: "center",
    },
  })
);
