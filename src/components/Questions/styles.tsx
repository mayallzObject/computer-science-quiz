import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    align: "center",
    width: "100%",
    fontFamily: "Kaushan Script",
  },
  card: {
    alignItems: "center",
    fontFamily: "Kaushan Script",
    square: "false",
  },
  title: {
    fontSize: 23,

    alignItems: "center",
    fontFamily: "Kaushan Script",
    color: "silver",
    backgroundColor: "#33313b",
    borderRadius: 360,
    padding: 12,
  },

  button: {
    fontSize: 13,
    padding: 10,
    minWidth: 200,
    elavation: 10,
    margin: 1,
    color: "white",
    backgroundColor: "#28784b",
    fontWeight: "bold",
    fontFamily: "'Inconsolata', monospace",
    "&:hover": {
      color: "gold",
      backgroundColor: "#044343",
    },
  },
  submitButton: {
    fontSize: 13,
    padding: 10,
    minWidth: 200,
    elavation: 23,
    margin: 5,
    color: "white",
    backgroundColor: "#28784b",
    fontWeight: "bold",
    fontFamily: "'Rokkitt', serif",
    "&:hover": {
      color: "#28784b",
      backgroundColor: "white",
    },
  },
  actionButton: {
    fontSize: 13,
    padding: 10,
    minWidth: 200,
    elavation: 23,
    margin: 10,

    fontWeight: "bold",
    fontFamily: "'Rokkitt', serif",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#28784b",
    },
  },
});

export const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.secondary",
  m: 1,
  border: 1,
  style: { width: "5rem", height: "5rem" },
};
