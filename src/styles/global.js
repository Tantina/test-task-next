import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {  
  --spacer: 32px;

  /* Fonts */

  --font-headline: 25px;
  --font-headline-small: 21px;
  --font-body-large: 18px;
  --font-body: 16px;

  /* Colors */
  --color-blue: #5045CD;
  --color-sky: #A8B6FF;
  --color-baby-blue: #F5F8FA;
  --color-white: #FFFFFF;
 
}

html {
  font-family: 'Arial';
  background-color: var(--color-baby-blue);
}
`

export default GlobalStyle;