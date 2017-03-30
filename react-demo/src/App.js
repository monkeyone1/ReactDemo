import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state={
            num:100,
            sex: true
            
        };
    }
    click(){
        console.log(this);
        this.setState({
            num:this.state.num+1,
            sex:!this.state.sex
        });
        
    }
   render() {
        return (
            <div>
                我当前的数字是{this.state.num} <br/>
                <p>性别:{this.state.sex? '男':'女'}</p>
                <button onClick={this.click.bind(this)}>+1</button>

            </div>
        );
    }
}

export default App;

//状态变化，会触发react组件渲染
//state 管理组件内部数据和状态
//修改state 需要用setState这个方法，否则不会触发重新渲染
//vdom
//一切皆状态

