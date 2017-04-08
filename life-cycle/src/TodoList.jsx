import React, { Component } from 'react';
class TodoList extends Component {

    render() {
        console.log(this.props);
        let list = this
            .props
            .data
            .map((item,index) => <li key={item.id} className='list-group-item'> 
                <input style={{marginLeft:'20px'}}
                    type="checkbox"
                    defaultChecked={item.completed}
                    onChange={() => this.props.handleCompleted(item.id)}/>
                <span
                    style={{
                    textDecoration: item.completed
                        ? 'line-through'
                        : 'none'
                }}>{item.text}</span>
                <span
                className='glyphicon glyphicon-remove'
                    style={{
                    float: 'right'
                }}
                    onClick={() => this.props.handleRemove(item.id)}></span>
            </li>)
        
        return (
            <ul className='list-group'>
                {list}
            </ul>
        )
    }

}

export default TodoList;