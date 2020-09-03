import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    align: "center",
    width: "100%",

    borderRadius: "50%",
  },
  card: {
    alignItems: "center",

    square: "false",
  },
  title: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
  },
  content: {
    fontSize: 25,
    padding: 5,
    fontWeight: "bold",
  },

  button: {
    borderRadius: 260,
    fontSize: 12,
    minWidth: 250,
    margin: 5,
    padding: 2,
    fontWeight: "bold",
  },
  buttonStart: {
    borderRadius: "30%",
    fontSize: 50,
    minWidth: 100,
    margin: 10,
    padding: 2,
    fontWeight: "bold",

    "&:hover": {
      color: "#f3ca20",
      backgroundImage:
        "url(https://image.freepik.com/free-photo/microprocessor-chipset-central-processor-unit-illumination-circuit_34645-889.jpg)",
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
