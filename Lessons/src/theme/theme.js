import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      //   main: "#1016d2",
      main: "#1976d2",
    },
    secondary: {
      main: "#dc901e",
    },
    limeGreen: {
      main: "#32cd32",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
export default theme;
