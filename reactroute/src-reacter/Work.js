import React, { Component } from 'react';

import Nav from './nav.js';

class Work extends Component {
    render() {
        return (
            <div>
                <h1>这里是Work</h1>
                {this.props.children}
            
            </div>
        );
    }
}

export default Work;