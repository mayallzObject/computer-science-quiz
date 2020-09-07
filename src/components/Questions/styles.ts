import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    align: "center",
    width: "100%",
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
    fontSize: 17,
    padding: 5,
    fontWeight: "bold",
    fontFamily: "Courier New",
  },

  button: {
    borderRadius: 260,
    fontSize: 10,
    minWidth: 210,
    margin: 5,
    padding: 4,
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
