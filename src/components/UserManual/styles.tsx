import { Theme, makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    smHeader: {
      backgroundColor: theme.palette.primary.main,
      fontFamily: "Kaushan Script",

      fontWeight: "bold",
      color: "sandybrown",
    },
  })
);
