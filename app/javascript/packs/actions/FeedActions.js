'use strict'

import {
    SET_POSTS,
    SET_FEED_FROM
} from '../constants/Feed'

export function setPosts(posts) {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export function setFeedFrom(from) {
    return {
        type: SET_FEED_FROM,
        payload: from
    }
}