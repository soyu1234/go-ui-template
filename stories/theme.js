import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    common: {
      black: "black",
      white: "white"
    }
  },
  typography: {
    fontFamily: "'Acme', sans-serif;"
  }
});

export default theme;
