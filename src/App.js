import {  ThemeProvider } from "@mui/material";
import { AppWrapper } from "./components/AppWrapper/AppWrapper";
import {theme} from './theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
        <AppWrapper />
    </ThemeProvider>
  );
}

export default App;
