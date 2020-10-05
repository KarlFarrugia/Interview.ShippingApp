//#region Imports

// Cross Browser Support
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Footer from './components/Footer';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.css';
import './custom.css'

// Multi Langauge Support
import "./i18n";

//#endregion

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
