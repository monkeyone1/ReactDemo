import React, { Component } from 'react';
import Test from './Test';

class Collapse extends Component {
   constructor() {
       super();
       this.state={
           data:[
               {btn:'btn1',content:'我是第一个手风琴的内容'},
               {btn:'btn2',content:'我是第一个手风琴的内容'},
               {btn:'btn3',content:'我是第一个手风琴的内容'},
               {btn:'btn4',content:'我是第一个手风琴的内容'}
           ],
           show:0
       }
   }
   handShow(index) {
       console.log(index);
       this.setState({show:index});
       this.refs.Test.handleShow()
      // console.log(this.refs.input.value);
   }
    render() {
        let str1=this.state.data.map((item,index,array ) => 
        <div key={index}><button onClick={this.handShow.bind(this,index)}>{item.btn}</button> 
        <p style={{height:this.state.show===index?'24px':'0px',matgin:'0',overflow:'hidden',transition:" 0.5s"}} >{item.content}</p></div>)
        return (
            <div>
                {str1}
                <Test ref='Test'  />                
            </div>
        )
    }
}

export default Collapse;

//react 默认会遍历数组