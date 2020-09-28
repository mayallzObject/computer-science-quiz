import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    background: {
      default: "#be9b7b",
      paper: "#3c2f2f",
    },
    primary: {
      main: "#854442",
      light: "#fff4e6",
      dark: "#397D02",
    },
    secondary: {
      main: "#3c2f2f",
      light: "#9acd32",
      dark: "#00a0b0",
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
      main: "#33313b",
      light: "#f4a460 ",
      dark: "#00b159",
    },
    type: "dark",
  },
});
