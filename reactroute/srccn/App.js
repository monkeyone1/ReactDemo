import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <h1>conde 中文社区</h1>
                {this.props.children}
            </div>
        );
    }
}

export default App;