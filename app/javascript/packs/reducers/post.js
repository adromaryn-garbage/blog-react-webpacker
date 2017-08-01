'use strict'

import {
    SET_ID,
    SET_TITLE,
    SET_CONTENT,
    SET_CREATED,
    SET_UPDATED,
    SET_POST_FROM
} from '../constants/Post'

const initialState = {
    id: undefined,
    title: '',
    content: '',
    created: undefined,
    updated: undefined,
    fromRoutePost: true
}

export default function main(state = initialState, action) {
    switch (action.type) {
        case SET_ID:
            return {...state, id: action.payload}
        case SET_TITLE:
            return {...state, title: action.payload}
        case SET_CONTENT:
            return {...state, content: action.payload}
        case SET_POST_FROM:
            return {...state, fromRoutePost: action.payload}
        default:
            return state
    }
}