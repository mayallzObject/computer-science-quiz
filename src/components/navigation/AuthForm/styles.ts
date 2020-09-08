import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    padding: theme.spacing(1),
  },
  button: {
    padding: 5,
    iconSize: 10,
    fontWeight: "bold",

    backgroundImage:
      "url(http://quotesideas.com/wp-content/uploads/2015/05/Summer-Beach-Wallpaper-107.jpg)",
    "&:hover": {
      color: "#000000",
      backgroundColor: "#ffff00",
    },
  },
}));
