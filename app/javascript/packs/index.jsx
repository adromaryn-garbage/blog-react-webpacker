'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {connect, createProvider} from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'

const store = configureStore()
const Provider = createProvider()

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    if (root) {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            root)
    }
})