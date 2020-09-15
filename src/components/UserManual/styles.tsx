import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      alignItems: "center",
    },
    media: {
      paddingTop: "56.25%", // 16:9
      minHeight: 500,

      alignItems: "center",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },

    button: {
      margin: 4,
      marginBottom: 20,
    },
  })
);

// const HtmlTooltip = withStyles((theme) => ({
//   tooltip: {
//     backgroundColor: "#f5f5f9",
//     color: "rgba(0, 0, 0, 0.87)",
//     minWidth: 400,
//     fontSize: theme.typography.pxToRem(14),
//     border: "1px solid #dadde9",
//     textColor: "#000000",
//   },
// }))(Tooltip);
