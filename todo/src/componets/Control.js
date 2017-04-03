import React, {Component} from 'react';

class Control extends Component {
    constructor() {
        super();
        this.state = {
            btns: ['All', 'ACTIVE', 'COMPLETED']
        }
    }

    render() {
        let styles = {
            btn: {
                lineHeight: '30px',
                fontSize: '10px',
                padding: '10px'
            }
        }
        return (
            <div style={styles}>
                分类:{this
                    .state
                    .btns
                    .map((x) => <button onClick={() => this.props.handleFilter(x)
                        
                    }key={Math.random()}>{x}</button>)}
            </div>
        );
    }
}

export default Control;