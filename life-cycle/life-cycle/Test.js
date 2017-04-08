import React, { Component } from 'react';

class Test extends Component {
    componentWillReceiveProps(props){
        console.log('componentWillReceiveProps');
        console.log(props);
    }
    componentWillUnmount() {
        console.log('hello');
    }
    
    render() {
        return (
            <div>
                {this.props.num}
            </div>
        );
    }
}

export default Test;