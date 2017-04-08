import React, { Component } from 'react';

class Bolg extends Component {
    render() {
        console.log(this.props.params.title);
        return (
            <div>

             我是blog组件
            </div>
        );
    }
}

export default Bolg;