import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    title: {
      fontSize: 24,
      fontWeight: 700,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 600,
    },
    textLg: {
      fontSize: 18,
      fontWeight: 500,
    },
    textMd: {
      fontSize: 16,
    },
    textSm: {
      fontSize: 14,
    },
  },
  spacing: 2,
});
