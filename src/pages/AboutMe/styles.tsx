import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      marginTop: theme.spacing(5),

      textAlign: "center",
    },
    button: {
      margin: 24,
    },
    smHeader: {
      backgroundColor: theme.palette.primary.main,
      fontFamily: "Kaushan Script",
    },
    header: {
      flexgrow: 1,
      backgroundColor: theme.palette.background.default,
      fontFamily: "Kaushan Script",
      fontSize: 30,
      fontWeight: "bold",
      margin: 10,
      padding: 8,
    },
    backHeader: {
      backgroundColor: theme.palette.primary.main,
      fontFamily: "Kaushan Script",
    },
  })
);
