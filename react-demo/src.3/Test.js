import React, {Component} from 'react';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        }

    }
    handleShow() {
        console.log(this);
        this.setState({
            
            show: !this.state.show
        });
    }

    render() {
        let styles = {
            background: 'rgba(0,0,0,0.5)',
            position: 'fixed',
            top: '0',
            left: '50%',
            right: '0',
            bottom: '0',
            transition: '0.5s',
    
            transform: this.state.show
                ? 'translateX(0%)'
                : 'translateX(100%)'

        }
        return (
            <div style={styles} onClick={this.handleShow.bind(this)}></div>
        );
    }
}

export default Test;
