import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla:400,700');
  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Karla', sans-serif;
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    cursor: pointer; 
    font-family: 'Karla', sans-serif;
    padding: 0;
  }

  select {
    font-family: 'Karla', sans-serif;
  }
`

export default GlobalStyle