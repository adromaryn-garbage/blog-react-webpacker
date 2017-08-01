'use strict'
import {
    SET_POSTS,
    SET_FEED_FROM
} from '../constants/Feed'


const initialState = {
    posts: [],
    fromRouteFeed: true
}

export default function main(state = initialState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload}
        case SET_FEED_FROM:
            return {...state, fromRouteFeed: action.payload}
        default:
            return state
    }
}
