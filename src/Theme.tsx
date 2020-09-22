import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    background: {
      default: "#854442",
      paper: "#4b3832",
    },
    primary: {
      main: "#be9b7b",
      light: "#be9b7b",
      dark: "#397D02",
    },
    secondary: {
      main: "#854442",
      light: "#ffd3b6",
    },
    type: "dark",
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
    secondary: {
      main: "#3c4f65",
      light: "#f4a460",
    },
    type: "dark",
  },
});
