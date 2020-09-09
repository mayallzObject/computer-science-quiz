import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
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

  button: {
    margin: 5,
    padding: 5,
    iconSize: 10,
    fontWeight: "bold",
    fontFamily: "Kaushan Script",
    backgrounColor: "navy",
    "&:hover": {
      color: "#000000",
      backgroundColor: "#ffff00",
    },
  },
}));
