import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
  },
  darkButton: {},
  icon: {
    alignSelf: "center",
    textAlign: "center",
  },
  button: {
    margin: 10,
    fontSize: 10,
    fontWeight: "bold",

    backgroundImage:
      "url(http://quotesideas.com/wp-content/uploads/2015/05/Summer-Beach-Wallpaper-107.jpg)",
    "&:hover": {
      blurRadius: "true",
      color: "#000000",
      backgroundColor:
        "url(https://scx1.b-cdn.net/csz/news/800/2018/space.jpg)",
    },
  },
}));
