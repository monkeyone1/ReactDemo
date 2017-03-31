import React, { Component } from 'react';
//Chidren 只有一个值数据类型 是object 多个是array
class Chidren extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Chidren;