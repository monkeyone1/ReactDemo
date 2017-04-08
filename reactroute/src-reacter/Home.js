import React, { Component } from 'react';

import Nav from './nav.js';

class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Nav />
                {this.props.children}
                <button onClick={this.props.router.goBack}>lala</button>
                <h1>home</h1>    
            </div>
        );
    }
}

export default Home;