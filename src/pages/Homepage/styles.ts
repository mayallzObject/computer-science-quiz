import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      marginTop: theme.spacing(10),
      textAlign: "center",
    },
    button: {
      margin: 24,
    },
  })
);
