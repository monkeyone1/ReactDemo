import React, {Component} from 'react';

import Control from './componets/Control';
import List from './componets/List';
import './main.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '', //输入的值
            data: [], //列表数据
            visible: 'ALL'
        }

    }

    //判断
    handleSubmit(e) {
        e.preventDefault();
        let newItem = this
            .state
            .inputValue
            .trim(); //获取输入的值

        if (newItem.length === 0) {
            alert('输入内容不能为空');
        } else {
            let newTode = {
                text: newItem,
                completed: false,
                id: new Date().getTime()
            }
            //拼接对象
            this.setState({
                data: [
                    ...this.state.data,
                    newTode
                ]
            });

        }

    }
    myFindIndex(id) {
        return this
            .state
            .data
            .findIndex((item) => item.id === id)
    }
    // findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。
    handleCompleted(id) {
        let index = this.myFindIndex(id);
        //更改数据对象
        this.state.data[index].completed = !this.state.data[index].completed;
        this.setState({data: this.state.data});
    }

    //获取input内容
    handeInput(e) {
        console.log(this.state.inputValue);
        this.setState({inputValue: e.target.value});
    }
    handleRemove(id) {
        let index = this.myFindIndex(id);
        this
            .state
            .data
            .splice(index, 1);
        this.setState({data: this.state.data});
    }
    handleFilter(visible){
        this.setState({visible:visible})
    }


    render() {
        let styles = {
            root: {
                maxWidth: '600px',
                overflow: 'hidden',
                margin: '0 auto',
                textAlign: 'conter'

            }
        }
        let showData;
        switch (this.state.visible) {
            case 'ACTIVE':
                showData=this.state.data.filter(item=>!item.completed);
                break;
                case 'COMPLETED':
                showData=this.state.data.filter(item=>item.completed);
                break;
            default:
                showData = this.state.data;
                console.log(showData);

        }
        return (
            <div style={styles.root}>
                <h1>Hello</h1>
                <form
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <div>
                        <input
                            type="text"
                            value={this.state.inputValue}
                            onChange={this
                            .handeInput
                            .bind(this)}/>
                        <button >添加{this.state.data.length}</button>
                    </div>
                </form>
                <List
                    data={showData}
                    handleRemove={this
                    .handleRemove
                    .bind(this)}
                    handleCompleted={this
                    .handleCompleted
                    .bind(this)}/>
                <Control handleFilter={this.handleFilter.bind(this)}/>

            </div>
        );
    }
}

export default App;