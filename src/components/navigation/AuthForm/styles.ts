import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,

      padding: theme.spacing(1),
    },
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
  })
);
