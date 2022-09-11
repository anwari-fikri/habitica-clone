import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import AppHeader from "./components/AppHeader";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    navbar: '#432874',
    appheader: '#36205d',
    body: '#fff',
    footer: '#003333',
  },
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles/>
        <Navbar/>
        <AppHeader/>
      </>
    </ThemeProvider>
  );
}

export default App;
