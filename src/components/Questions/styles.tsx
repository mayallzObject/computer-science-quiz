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
    fontSize: 28,
    padding: 20,

    fontFamily: "Kaushan Script",
  },
  button: {
    borderRadius: 10,
    padding: 5,
    fontSize: 14,
    minWidth: 140,
    margin: 1,

    fontWeight: "bold",
    fontFamily: "Kaushan Script",
    "&:hover": {
      color: "gold",
    },
  },
  secondaryButton: {
    borderRadius: 10,
    padding: 5,
    fontSize: 14,
    minWidth: 140,
    margin: 1,

    fontWeight: "bold",
    fontFamily: "Arial",
    "&:hover": {
      color: "gold",
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
