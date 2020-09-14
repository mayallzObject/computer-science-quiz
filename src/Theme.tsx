import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    background: {
      default: "#9c968b",
      paper: "#978d58",
    },
    primary: {
      main: "#3c4f65",
      dark: "#28784b",
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
      dark: "#28784b ",
    },
    type: "dark",
  },
});
