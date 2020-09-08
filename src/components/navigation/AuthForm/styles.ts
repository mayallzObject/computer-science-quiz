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
    fontFamily: "Kaushan Script",
    backgrounColor: "navy",
    "&:hover": {
      color: "#000000",
      backgroundColor: "#ffff00",
    },
  },
}));
