import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
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
        <Header/>
      </>
    </ThemeProvider>
  );
}

export default App;
