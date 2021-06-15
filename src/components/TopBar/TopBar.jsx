import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

import './TopBar.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Device } from '@capacitor/device';

export default function TopBar(props) {

  const [devicePlatform, setDevicePlatform] = React.useState('web')
  const getDeviceInfo = async () => {
    const info = await Device.getInfo();
    setDevicePlatform(info.platform)
  };
  getDeviceInfo()

  return (
    <div className="TopBar" style={{
        paddingTop : devicePlatform === 'web' ? '0' : '35px',
        height: devicePlatform === 'web' ? '75px' : '75px'
        }}
      >
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

