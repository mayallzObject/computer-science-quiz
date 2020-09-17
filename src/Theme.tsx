import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    background: {
      default: "#978d58",
      paper: "#9c968b",
    },
    primary: {
      main: "#3c4f65",
      dark: "#335d2d",
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
