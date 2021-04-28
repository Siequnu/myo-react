import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './fonts/font.css';

import Navbar from './Navbar/Navbar';
import TopBar from './components/TopBar/TopBar';

import SplashScreen from './components/SplashScreen/SplashScreen';
import UserMenu from './components/UserMenu/UserMenu.jsx';
import ViewActivitiesComponent from './components/ViewActivities/ViewActivitiesComponent';
import Activity from './components/Activity/Activity';
import Spark from './components/Spark/Spark';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      splashScreen: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ splashScreen: false })
    }, 1500);
  }

  render() {
    return (
      <div className="App">
        <link rel="shortcut icon" href="./favicon.ico" /> 
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <header className="App-header">
          {this.state.splashScreen ? (
            <SplashScreen />
          ) : (
            <BrowserRouter>
              <TopBar />
              <div className="AppWrapper">
                <Switch>
                  
                  <Route exact path="/">
                    <ViewActivitiesComponent />
                  </Route>

                  <Route exact path="/activity/:activityId">
                    <Activity />
                  </Route>

                  <Route exact path="/spark">
                    <Spark />
                  </Route>

                  <Route exact path="/user">
                    <UserMenu />
                  </Route>

                </Switch>
              </div>
              <Navbar />
            </BrowserRouter>
          )}

        </header>
      </div>
    );
  }
}

export default App;
