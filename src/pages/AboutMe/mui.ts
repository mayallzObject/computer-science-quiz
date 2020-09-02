import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(5),
      marginTop: 10,

      textAlign: "center",
    },
    button: {
      margin: 4,
      fontSize: 30,
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
  })
);
