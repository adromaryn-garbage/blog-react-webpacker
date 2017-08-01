'use strict'

import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import 'whatwg-fetch'

export default class Feed extends Component {

    componentDidMount() {
        if (this.props.fromRouteFeed) {
            this.fetchRequest()
        }
    }

    fetchRequest(){
        this.props.setFeedFrom(false)
        this.props.setPostFrom(true)
        this.props.setPosts([])
        fetch(`/`, {
            headers: {
                "Content-Type": "text/json"
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.props.setPosts(json)
            })
    }


    render() {
        let posts = this.props.posts
        let postsTemplate = posts.length === 0 ?
            (<p>Nothing there yet</p>) :
            posts.slice().reverse().map((post, index) => {
            return (
                <div key={index}>
                    <Link to={`/posts/${post.id}`} className="post-title">{post.title}</Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Posts</h1>
                {postsTemplate}
            </div>
        )
    }
}