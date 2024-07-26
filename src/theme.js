import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#192756",
    },
    secondary: {
      main: "#5a6978", // Custom secondary color
    },
  },
  text: {
    primary: "#1A2027", // Custom primary text color
    secondary: "#5a6978", // Custom secondary text color
  },
});

export default theme;
