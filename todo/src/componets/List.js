import React, {Component} from 'react';

class List extends Component {

    render() {
        console.log(this.props);
        let list = this.props.data.map((item) => <li key={item.id}>
         <input type="checkbox" defaultChecked={item.completed}/>
         <span style={{textDecoration:item.completed?'line-through':'none'}}>{item.text}</span>
         <span style={{float:'right'}}>X</span>
         </li>
        )
        // list.map(item=><li key={item.id}>
        // <input type="checkbox" defaultChecked={item.completed}/>
        // <span style={{textDecoration:item.completed?'line-through':'none'}}>{item.text}</span>
        // <span>X</span>
        // </li>)
    return (
      <ul>
      {list}
      </ul>
    )
}

}

export default List;