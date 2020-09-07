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
    color: "#6BCAE2",
    backgroundImage:
      "url(https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-740x463.jpg)",
    "&:hover": {
      blurRadius: "true",
      color: "#000000",
      backgroundColor:
        "url(https://scx1.b-cdn.net/csz/news/800/2018/space.jpg)",
    },
  },
}));
