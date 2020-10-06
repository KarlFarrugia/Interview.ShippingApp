//#region Imports

// Cross Browser Support
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Footer from './components/Footer';
import Header from './components/Header';
import * as Parcel from './store/Parcel';
import {ApplicationState} from './store';

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import 'bootstrap/dist/css/bootstrap.css';
import './custom.css'

// Multi Langauge Support
import "./i18n";

//#endregion

Sentry.init({
    dsn: "https://7f69e5cbd6854d3dadea0cf110e9d20e@o374444.ingest.sentry.io/5454814",
    integrations: [
      new Integrations.BrowserTracing(),
    ],
  
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

// Render the entire solution using the App component
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <App />
            <Footer />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
