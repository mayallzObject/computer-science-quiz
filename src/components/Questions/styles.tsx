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
    fontSize: 21,
    fontWeight: "bold",
    alignItems: "center",
    fontFamily: "Kaushan Script",
    color: "silver",
    backgroundColor: "#33313b",
    borderRadius: 360,
    padding: 18,
  },

  button: {
    fontSize: 12,
    padding: 5,
    minWidth: 200,
    elavation: 10,
    margin: 5,

    color: "#ffffff",
    backgroundColor: "#28784b",
    fontFamily: "'Rokkitt', serif",
    "&:hover": {
      color: "#28784b",
      backgroundColor: "#ffffff",
    },
  },
  submitButton: {
    fontSize: 13,
    padding: 10,
    minWidth: 200,
    elavation: 23,
    margin: 10,
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
    color: "sandybrown",
    backgroundColor: "#33313b",
    fontWeight: "bold",
    fontFamily: "'Rokkitt', serif",
    "&:hover": {
      color: "#33313b",
      backgroundColor: "#ffffff",
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
