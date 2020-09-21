import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    background: {
      default: "#be9b7b",
      paper: "#9c968b",
    },
    primary: {
      main: "#854442",
      light: "#4b3832",
      dark: "#397D02",
    },
    type: "light",
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    background: {
      default: "#3c4f65",
      paper: "#33313b",
    },
    primary: {
      main: "#834c69",
      light: "#978d58",
      dark: "#397D02 ",
    },
    type: "dark",
  },
});
