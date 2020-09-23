import { red, blueGrey,grey,deepPurple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },
    secondary: {
      main: blueGrey[500],
    },
    test: {
      primary: grey[900],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey[200],
    },
  },
})

export default theme;
