// @flow

import { createMuiTheme } from "@material-ui/core/styles";

export const fontFamilyCommon = '"Gilroy-Regular", sans-serif';
export const fontFamilyH2 = '"Gilroy-Semibold", sans-serif';
export const fontMainColor = '#202835';
export const fontSecondaryColor = '#f1c355';
export const fontLightColor = '#b4b4b4';

const th = createMuiTheme({});
// Create a theme instance.
export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: fontMainColor,
      light: fontLightColor,
    },
    secondary: {
      main: fontSecondaryColor,
    },
    error: {
      main: '#d15a5a',
    },
    background: {
      default: '#fcfcfc',
    },
  },
  typography: {
    fontFamily: fontFamilyCommon,
    colorPrimary: {
      color: fontLightColor
    },
    colorSecondary: {
      color: fontSecondaryColor
    },
    h1: {
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 24,
      lineHeight: 1.3,
      color: fontMainColor,
      [th.breakpoints.up('md')]: {
        color: '#fff',
      }
    },
    h2: {
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontSize: 18,
      lineHeight: 1.3,
      fontFamily: fontFamilyH2,
      color: fontMainColor
    },
    h3: {
      textTransform: 'uppercase',
      lineHeight: 1.4,
      letterSpacing: '0.07em',
      fontFamily: fontFamilyCommon,
      fontSize: 16,
      color: fontMainColor
    },
    h4: {
      fontFamily: fontFamilyCommon,
      lineHeight: 1.4,
      fontSize: 14,
      color: fontLightColor
    },
    h5: {
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      fontSize: 16,
      lineHeight: 1.3,
      fontFamily: fontFamilyCommon,
      color: '#F37E78' 
    },
    subtitle1: {
      lineHeight: 1.4,
      fontFamily: fontFamilyCommon,
      fontSize: 16,
      color: fontMainColor
    },
    subtitle2: {
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontSize: 18,
      lineHeight: 1.3,
      color: fontMainColor
    },
    body1: {
      lineHeight: 1.4,
      fontFamily: fontFamilyCommon,
      fontSize: 16,
      color: fontMainColor,
      [th.breakpoints.up('md')]: {
        lineHeight: 1.5,
      }
    },
    body2: {
      lineHeight: 1.4,
      fontFamily: fontFamilyCommon,
      fontSize: 16,
      color: fontMainColor
    },
    button: {
      fontFamily: fontFamilyCommon
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: '#f1c355',
        color: fontMainColor,
        boxShadow: '0 0 0 0 #fff',
        '&$disabled': {
          backgroundColor: '#d15a5a',
          color: '#fff'
        },
        // [th.breakpoints.up('md')]: {
        //   boxShadow: '0 0 0 0 #fff',
        // },
        '&:hover': {
          boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.2)',
          backgroundColor: '#F1C353',
          // [th.breakpoints.up('md')]: {
          //   boxShadow: '0 5px 5px 0 rgba(0, 0, 0, .1) !important',
          // },
        },
        '&:active': {
          boxShadow: '0 0 0 0 #fff !important',
          backgroundColor: '#F1C353',
        }
      },
      containedPrimary: {
        color: fontMainColor,
      },
      containedSecondary: {
        color: '#fff'
      },
      outlined: {
        border: 'transparent',
        color: fontSecondaryColor,
        fontSize: 16,
        '&:active': {
          backgroundColor: fontSecondaryColor,
          color: fontMainColor,
        },
        '&:hover': {
          backgroundColor: fontSecondaryColor,
          color: fontMainColor,
        },
      },
      text: {
        fontSize: 16,
        color: '#fff',
        '&:active': {
          color: fontSecondaryColor,
        },
        '&:hover': {
          color: fontSecondaryColor,
        }
      },
      sizeSmall: {
        // padding: '15px 25px',
        textTransform: 'none',
        fontSize: 16
      },
      sizeLarge: {
        // padding: '25px 75px',
        textTransform: 'none',
        fontSize: 18
      }
    },
    MuiPaper: {
      elevation4: {
        boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)'
      },
      elevation5: {
        boxShadow: '0 5px 5px 0 rgba(0, 0, 0, .1)',
      },
      rounded: {
        borderRadius: 10
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: 24
      }
    },
    MuiTouchRipple: {
      root: {
        color: '#fff'
      }
    },
    MuiInput: {
      input: {
        fontSize: 18,
        // marginTop: 48,
        // [th.breakpoints.up('md')]: {
        //   marginTop: 8,
        // }
      }
    }
  },
});
