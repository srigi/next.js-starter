import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, green, grey, indigo, lightBlue } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[400],
    },
    secondary: {
      main: green[800],
    },
    text: {
      secondary: grey[200],
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: indigo[600],
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: lightBlue[900],
        },
      },
    },
  },
});
