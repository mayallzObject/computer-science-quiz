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
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
    fontFamily: "Kaushan Script",
  },
  content: {
    fontSize: 30,
    padding: 20,
    fontWeight: "bold",
    fontFamily: "Kaushan Script",
  },
  button: {
    borderRadius: 260,
    fontSize: 13,
    minWidth: 120,
    margin: 2,
    fontWeight: "bold",
    fontFamily: "Kaushan Script",
  },
  startButton: {
    borderRadius: 120,
    fontSize: 100,
    minWidth: 240,
    margin: 20,
    padding: 40,
    color: "#978d58",
    backgroundColor: "#3c4f65",
    fontWeight: "bold",
    fontFamily: "Kaushan Script",
  },
});

export const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.secondary",
  m: 1,
  border: 1,
  style: { width: "5rem", height: "5rem" },
};
