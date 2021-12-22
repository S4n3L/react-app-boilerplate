// import React from 'react';
//
// import { addDecorator } from '@storybook/react';
// import { ThemeProvider } from '@mui/styles';
// import { muiTheme } from 'storybook-addon-material-ui5'

// export const decorators = [
// 	muiTheme()
// ]

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import incubetaLight from "@src/styles/themes"

/* const incubetaLight = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
  },
}) */

const defaultTheme = createTheme(); // or your custom theme

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={incubetaLight}>
      <ThemeProvider theme={incubetaLight}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// addDecorator((story) => (
//   <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>
// ));

/*

import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

import { muiTheme } from '../src/stylesheet';

addDecorator((story) => (
    <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>
));

*/
