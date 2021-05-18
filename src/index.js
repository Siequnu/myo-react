import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { SWRConfig } from 'swr'

import './interceptors/axios-interceptor';
import { fetcher } from './services';

ReactDOM.render(

    <SWRConfig value={{ fetcher }}>
        <App />
    </SWRConfig>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
