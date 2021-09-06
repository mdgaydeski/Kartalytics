import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import SiteError from './pages/SiteError';
import './styles/app.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary FallbackComponent={SiteError} key={0}>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
