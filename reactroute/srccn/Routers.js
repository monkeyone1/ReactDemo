import React, { Component } from 'react';
import { Route,Router,browserHistory,IndexRoute } from 'react-router';


import Home from './Home.js';
import App from './App.js';
class Routers extends Component {
    render() {
        return (
            <Router history={browserHistory}>
            <Route path='/' component={App}>
            <IndexRoute component={Home}/>

            </Route>
                
            </Router >
        );
    }
}

export default Routers;