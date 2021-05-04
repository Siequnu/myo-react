import React from 'react';
import './UserMenu.css';

import LoginButton from '../Auth/LoginButton'
import LogoutButton from '../Auth/LogoutButton'
import Profile from '../Auth/Profile'

export default function UserMenu() {

    return (
        <div className="UserMenu">
            <h1>Your account</h1>
            <Profile />
            <LoginButton />
            <LogoutButton />
            
        </div>
    )
}