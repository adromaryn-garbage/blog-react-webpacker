'use strict'

import {
    SET_ID,
    SET_TITLE,
    SET_CONTENT,
    SET_CREATED,
    SET_UPDATED,
    SET_POST_FROM
} from '../constants/Post'

export function setID(id) {
    return {
        type: SET_ID,
        payload: id
    }
}

export function setTitle(title) {
    return {
        type: SET_TITLE,
        payload: title
    }
}

export function setContent(content) {
    return {
        type: SET_CONTENT,
        payload: content
    }
}

export function setCreated(created) {
    return {
        type: SET_CREATED,
        payload: created
    }
}

export function setUpdated(updated) {
    return {
        type: SET_UPDATED,
        payload: updated
    }
}

export function setPostFrom(from) {
    return {
        type: SET_POST_FROM,
        payload: from
    }
}