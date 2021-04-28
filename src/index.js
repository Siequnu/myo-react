import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { SWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

ReactDOM.render(
    <SWRConfig value={{ fetcher }}>
        <App />
    </SWRConfig>,
    document.getElementById('root')
);

serviceWorker.unregister();
