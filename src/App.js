// React imports
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Authentication imports
import { PrivateRoute } from './components/Auth/PrivateRoute';
import Login from './components/Auth/Login';
import ResetWithToken from './components/Auth/ResetWithToken';
import Reset from './components/Auth/Reset';

// App styling
import './App.css';
import './fonts/font.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Navigation components
import Navbar from './components/Navbar/Navbar';
import TopBar from './components/TopBar/TopBar';

// Page components
import SplashScreen from './components/SplashScreen/SplashScreen';
import UserMenu from './components/UserMenu/UserMenu.jsx';
import ViewActivitiesComponent from './components/ViewActivities/ViewActivitiesComponent';
import Activity from './components/Activity/Activity';
import Spark from './components/Spark/Spark';

// Notifications
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export const SnackbarContext = React.createContext();


export default function App() {

  const [splashScreen, setSplashScreen] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false)
    }, 1500);
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: (useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'),
      primary: {
        main: '#F19820'
      },
      secondary: {
        main: '#CAE8FF'
      }
    },
    typography: {
      fontFamily: [
        'F37 Ginger',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(',')
    }
  });

  // Snackbar
  const [snackbar, setSnackbar] = React.useState({
    text: '',
    severity: '',
    open: false,
  });
  const handleClose = () => {
    setSnackbar({ open: false });
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <header className="App-header">

          <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>

            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleClose}>
              <MuiAlert onClose={handleClose} severity={snackbar.severity}>
                {snackbar.text}
              </MuiAlert>
            </Snackbar>

            {splashScreen ? (<SplashScreen />) : (

              <BrowserRouter>

                <TopBar />

                <div className="AppWrapper">

                  <Switch>
                    <Route exact path="/"> <ViewActivitiesComponent /> </Route>

                    <Route exact path="/activity/:activityId"> <Activity /> </Route>

                    <Route exact path="/spark"> <Spark /> </Route>

                    <PrivateRoute exact path="/user" component={UserMenu} />

                    <Route exact path="/login" component={Login} />

                    <Route exact path="/reset" component={Reset} />

                    <Route exact path="/reset/:token" component={ResetWithToken} />
                  </Switch>

                </div>

                <Navbar />

              </BrowserRouter>
            )}

          </SnackbarContext.Provider>
        </header>
      </div>
    </ThemeProvider>
  );
}
