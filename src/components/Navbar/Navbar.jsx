import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BrushIcon from '@material-ui/icons/Brush';

import { Device } from '@capacitor/device';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    const [devicePlatform, setDevicePlatform] = React.useState('web')
    const getDeviceInfo = async () => {
      const info = await Device.getInfo();
      setDevicePlatform(info.platform)
    };
    getDeviceInfo()
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className="navbar"
        style={{
          paddingBottom : devicePlatform === 'web' ? '0' : '20px',
          height: devicePlatform === 'web' ? 'auto' : '80px'
          }}
      >
        <BottomNavigationAction component={Link} to="/" id="HomeNavbarIcon" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to="/spark" id="SparkNavbarIcon" label="Spark" icon={<EmojiObjectsIcon />} />
        
      </BottomNavigation>
    );
  }
