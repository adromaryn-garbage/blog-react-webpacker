'use strict'

import { combineReducers } from 'redux'
import feed from './feed'
import post from './post'

export default combineReducers({
    feed,
    post
})