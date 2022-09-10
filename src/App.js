import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: '#441c75',
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
      </>
    </ThemeProvider>
  );
}

export default App;
