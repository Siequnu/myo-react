import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import FireplaceIcon from '@material-ui/icons/Fireplace';


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className="navbar"
      >
        <BottomNavigationAction component={Link} to="/" id="HomeNavbarIcon" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to="/spark" id="SparkNavbarIcon" label="Spark" icon={<FireplaceIcon />} />
      </BottomNavigation>
    );
  }
