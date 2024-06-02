import Input, {inputClasses} from '@mui/material/Input';

import MastercardFont from '../font/MarkWebW01Regular.ttf';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
export interface InputProps {
    placeholder: string
}

const theme = createTheme({
    typography: {
      fontFamily: 'MarkForMc',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Regular'), url(${MastercardFont}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
})

const css = `
  .made-input {
  }

  .made-input.${inputClasses.focused} {
    background: var(--made-checkbox-color-background-branded-selected);
  }
  }`;


export const MadeInput: React.FC<InputProps> = (props) => {
  console.log('ds');
    return  (
    <>
      <ThemeProvider theme={theme}>
         <style type="text/css">{css}</style>
          <Input placeholder={props.placeholder} className='made-input'>
          </Input>
      
      </ThemeProvider>
    </>
    )
    ;
};