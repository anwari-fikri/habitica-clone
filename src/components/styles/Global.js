import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Roboto', sans-serif;
    font-size: 1.15em;
    margin: 0;
    padding:0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
  }
  button {
    border: none;
    text-align: center;
    text-decoration: none;
  }
`

export default GlobalStyles