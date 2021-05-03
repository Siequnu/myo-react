import React from 'react';
import './UserMenu.css';
import { Redirect } from 'react-router-dom';

import Userfront from "@userfront/react";
Userfront.init("7n8vr8n6");

const LogoutButton = Userfront.build({
  toolId: "rmokbn"
});

export default function UserMenu() {
    if (!Userfront.accessToken()) {
        return (<Redirect to={{pathname: "/login"}} /> ); 
    };

    return (
        <div className="UserMenu">
            <h1>Your account</h1>
            <LogoutButton />
            
        </div>
    )
}