import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(8),

      textAlign: "center",
    },
    button: {
      margin: 24,
    },
    smHeader: {
      backgroundColor: theme.palette.primary.light,
      fontFamily: "Kaushan Script",
      borderRadius: 360,
      padding: 10,
    },

    backPaper: {
      padding: 20,
      borderRadius: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);
