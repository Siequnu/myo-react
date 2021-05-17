import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

import './TopBar.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class TopBar extends React.Component {
  
  render() {
      return (
          <div className="TopBar">
            <Link component={RouterLink} to="/" className="AccountLink">
              <img className="MyoLogo" src="/assets/logo.png" alt="Myo app logo" />
            </Link>
            <img className="MyoText" src="/assets/myo-text.png" alt="Myo app logo" />
            <Link component={RouterLink} to="/user" className="AccountLink">
              <AccountCircleIcon fontSize="large" className="AccountCircle" />
            </Link>
          </div>
      )
  }
}

export default TopBar;