import React, { Component } from 'react';

import Control from './componets/Control';
import List from './componets/List';
import './main.css';

class App extends Component {
    constructor() {
        super();
        this.state={
            inputValue:'', //输入的值
            data:[],        //列表数据
            visible:'ALL'
        }

    }
    handleSubmit(e){
        e.preventDefault();
        let newItem=this.state.inputValue.trim(); //获取输入的值
     
        if(newItem.length===0){
            alert('输入内容不能为空');
        }else{
            let newTode={
                text:newItem,
                completed:false,
                id:new Date().getTime()
            }
            this.setState({
                data:[
                    ...this.state.data,newTode
                ]
            }); 
            
        }
        

    }
    handeInput(e){
        console.log(this.state.inputValue);
        this.setState({
            inputValue:e.target.value
        });
    }
     
    render() {
       let styles={
            root:{
                width:'600px',
                overflow:'hidden',
                margin:'0 auto',
                textAlign:'conter'
                
            }
        }
        let showData;
        switch (this.state.visible) {
            case '':
                
                break;
            default:
            showData=this.state.data;
            console.log(showData);
                
        }
        return (
            <div style={styles.root}>
             <h1>Hello</h1>
             <form onSubmit={this.handleSubmit.bind(this)}>
             <div>
             <input type="text" value={this.state.inputValue} onChange={this.handeInput.bind(this)}/>
             <button >添加{this.state.data.length}</button>
             </div>
             </form>
             <List data={showData}/>
             <Control />   

            </div>
        );
    }
}

export default App;         