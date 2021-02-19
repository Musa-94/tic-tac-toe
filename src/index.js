import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';

import App from './app/App.jsx';
import RootSagas from './roots/rootSagas'
import RootReducer from './roots/rootReducers';
import { createLocalization } from 'src/lang/localization';

function initialize() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
    const root = document.getElementById('root');

    process.env.NODE_ENV !== 'production' && (window.store = store);

    sagaMiddleware.run(RootSagas);
    createLocalization('en');

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, root
    );
}

initialize();
