import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(5),

      textAlign: "center",
    },
    button: {
      margin: 24,
    },
  })
);
