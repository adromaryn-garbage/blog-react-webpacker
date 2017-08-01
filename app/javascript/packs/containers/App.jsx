'use strict'

import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Feed from '../components/Feed'
import Post from '../components/Post'
import About from '../components/About'
import * as feedActions from '../actions/FeedActions'
import * as postActions from '../actions/PostActions'

class App extends Component {

    render() {
        const FeedProps = (props) => {
            let resProps =  Object.assign({}, props, this.props.feed, this.props.actions)
            return (
                <Feed
                    {...resProps}
                />
            );
        }
        const PostProps = (props) => {
            let resProps =  Object.assign({}, props, this.props.post, this.props.actions)
            return (
                <Post
                    {...resProps}
                />
            );
        }
        let adminArea;
        if (window.authorized) {
            adminArea = (
                <a href="/logout" className="manage" data-method="delete">Logout</a>
            )
        }
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <div className="row">
                        <aside className="col-sm-2 col-md-3 col-lg-2 col-xs-2">
                            <h1>{window.user.name}</h1>
                            <h2>{window.user.preview}</h2>
                            <ul className="info">
                                <li>
                                    telegram:&nbsp;
                                    <a href={`//t.me/${window.user.telegram}`} target="_blank">
                                        {`@${window.user.telegram}`}
                                    </a>
                                </li>
                                <li>email: <a href={`mailto:${window.user.email}`}>{window.user.email}</a></li>
                            </ul>
                            {adminArea}
                            <ul className="navigate">
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </aside>
                        <div className="col-md-1 col-lg-1 col-xs-1">
                        </div>
                        <main className="col-sm-9 col-md-8 col-lg-9 col-xs-9">
                            <Route exact path="/(posts)?" component={FeedProps}/>
                            <Route path="/about" component={About}/>
                            <Route path="/posts/:id" component={PostProps}/>
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {
        feed: state.feed,
        post: state.post
    }
}

function mapDispatchToProps(dispath) {
    return {
        actions: {
            ... bindActionCreators(feedActions, dispath),
            ... bindActionCreators(postActions, dispath)
        },
    }
}

export	default	connect(mapStateToProps, mapDispatchToProps)(App)