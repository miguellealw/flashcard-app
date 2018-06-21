import { injectGlobal } from "styled-components";

export const neonGreen = "#45e6b5";

export default injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background: whitesmoke;
  }
`;
