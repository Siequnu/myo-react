import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { SWRConfig } from 'swr'
import { Auth0Provider } from "@auth0/auth0-react";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

ReactDOM.render(
    <Auth0Provider
        domain="dev-z4eaow9y.eu.auth0.com"
        clientId="iBtRx9Hw4263FF4ZXs6MED5Ljb1OlvRx"
        redirectUri={window.location.origin}
    >
        <SWRConfig value={{ fetcher }}>
            <App />
        </SWRConfig>
    </Auth0Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
