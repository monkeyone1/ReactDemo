import React, {Component,PropTypes} from 'react';
import  Children from './Children.js';

// let data=[
//     {index:1,title:'第一天的标题',date:'2017.1.30'},
//     {index:1,title:'第一天的标题',date:'2017.1.30'},
//     {index:1,title:'第一天的标题',date:'2017.1.30'},
//     {index:1,title:'第一天的标题',date:'2017.1.30'},
//     {index:1,title:'第一天的标题',date:'2017.1.30'},
//     {index:1,title:'第一天的标题',date:'2017.1.30'},
//     {index:1,title:'第一天的标题',date:'2017.1.30'},
//     {index:1,title:'第一天的标题',date:'2017.1.30'},
//     {index:1,title:'第一天的标题',date:'2017.1.30'}
// ]

class App extends Component {

    render() {
        
        return (
            <div>
            
             <Children>hello</Children>

            </div>
        );
    }
}
//默认属性
// App.defaultProps = {
//     bg: '#0f0',
//     color: 'red',
//     pad: 80
    

// }
// //类型检测   
// App.propTypes={
//     bg:PropTypes.string,
//     pad:PropTypes.number
    
// }


export default App;