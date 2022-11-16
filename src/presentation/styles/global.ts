import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  
  html, body, #main {
    height: 100%;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.colors['bg-color-200']};
  }

  .centralize-container {
    max-width: 576px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      max-width: 1145px;
    }
  }

  button {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
