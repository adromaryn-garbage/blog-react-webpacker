'use strict'

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(thunkMiddleware, logger),
        window.devToolExtension ? window.devToolExtension() : f => f
    ))
    return store;
}