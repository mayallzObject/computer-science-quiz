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
      marginTop: 25,
      fontFamily: "Kaushan Script",
      fontWeight: "bold",
    },
    header: {
      flexgrow: 1,
      backgroundImage:
        "url(https://a-static.besthdwallpaper.com/sphinx-and-the-pyramid-of-giza-oil-on-canvas-wallpaper-640x960-6798_169.jpg)",
      fontFamily: "Kaushan Script",
      fontSize: 30,
      fontWeight: "bold",
      margin: 10,
      padding: 8,
      color: "sandybrown",
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
