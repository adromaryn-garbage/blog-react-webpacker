'use strict'

import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'
import 'whatwg-fetch'

export default class Post extends Component {

    componentWillMount() {
        if (this.props.fromRoutePost) {
            this.fetchRequest(this.props.match.params.id)
        }
    }

    fetchRequest(id){
        this.props.setPostFrom(false)
        this.props.setFeedFrom(true)
        this.props.setTitle('')
        this.props.setContent('')
        this.props.set
        fetch(`/posts/${id}`, {
            headers: {
                "Content-Type": "text/json"
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.props.setTitle(json.title)
                this.props.setContent(json.content)
            })
    }

    render() {
        let id = this.props.match.params.id
        let adminArea
        if (window.authorized) {
            adminArea = (
                <div>
                    <small><a href={`/posts/${id}/edit`} target="_blank">Edit</a></small>
                    &nbsp;|&nbsp;
                    <small><a href={`/posts/${id}`} data-method="delete">Delete</a></small>
                </div>
            )
        }
        return (
            <div>
                <ReactMarkdown source={this.props.content } />
                {adminArea}
            </div>
        )
    }
}