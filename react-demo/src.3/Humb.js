import React, { Component } from 'react';

class Humb extends Component {
    constructor() {
        super();
        this.state={
            show:false
        }
    }
    handleShow(){
        this.setState({show:!this.state.show});
    }
    render() {
    let styles={height:this.state.show?'110px':'1px',overflow:'hidden',transition:'0.5s'}
        return (
            <div>
                <button onClick={this.handleShow.bind(this)}>三</button>
            <ul style={styles}>
                <li>啦啦啦啦啦</li>
                <li>啦啦啦啦啦</li>
                <li>啦啦啦啦啦</li>
                <li>啦啦啦啦啦</li>
                <li>啦啦啦啦啦</li>
            </ul>  
            </div>
        );
    }
}

export default Humb;