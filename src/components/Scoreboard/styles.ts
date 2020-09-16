import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 15,
      padding: 15,
    },
    body: {
      fontSize: 15,
    },
  })
)(TableCell);

export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

export const useStyles = makeStyles((theme) =>
  createStyles({
    // root: {
    //   flexGrow: 1,
    //   alignItems: "center",
    // },
    // media: {
    //   paddingTop: "56.25%", // 16:9
    //   minHeight: 500,

    //   alignItems: "center",
    // },
    // expand: {
    //   transform: "rotate(0deg)",
    //   marginLeft: "auto",
    //   transition: theme.transitions.create("transform", {
    //     duration: theme.transitions.duration.shortest,
    //   }),
    // },
    // expandOpen: {
    //   transform: "rotate(180deg)",
    // },
    // avatar: {
    //   backgroundColor: red[500],
    // },
    // button: {
    //   margin: 4,
    //   marginBottom: 15,
    //   fontFamily: "Kaushan Script",
    //   fontWeight: "bold",
    // },
    // header: {
    //   backgroundColor: theme.palette.primary.main,
    //   fontFamily: "Kaushan Script",
    //   fontSize: 50,
    //   fontWeight: "bold",
    //   color: "greenyellow",
    //   padding: 20,
    // },
    smHeader: {
      backgroundColor: theme.palette.primary.main,
      fontFamily: "Kaushan Script",
    },
  })
);
