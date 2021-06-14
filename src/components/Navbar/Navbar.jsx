import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BrushIcon from '@material-ui/icons/Brush';

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
        <BottomNavigationAction component={Link} to="/spark" id="SparkNavbarIcon" label="Spark" icon={<EmojiObjectsIcon />} />
        <BottomNavigationAction component={Link} to="/create" id="CreateNavbarIcon" label="Create" icon={<BrushIcon />} />
      </BottomNavigation>
    );
  }
