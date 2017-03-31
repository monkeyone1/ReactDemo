import React, {Component,PropTypes} from 'react';
import Card from './Card.js';

let data=[
    {idnex:1,title:'第一天的标题',date:'2017.1.30'},
    {idnex:1,title:'第一天的标题',date:'2017.1.30'},
    {idnex:1,title:'第一天的标题',date:'2017.1.30'},
    {idnex:1,title:'第一天的标题',date:'2017.1.30'},
    {idnex:1,title:'第一天的标题',date:'2017.1.30'},
    {idnex:1,title:'第一天的标题',date:'2017.1.30'},
    {idnex:1,title:'第一天的标题',date:'2017.1.30'},
    {idnex:1,title:'第一天的标题',date:'2017.1.30'},
    {idnex:1,title:'第一天的标题',date:'2017.1.30'}
]

class App extends Component {

    render() {
        console.log(this.props);
        // let styles = {
        //     color: this.props.color,
        //     background: this.props.bg,
        //     pading:`${this.props.pad}px`
        // }
        return (
            <div>
                {/*{this.props.name}
                {this.props.age}
                {this.props.male
                    ? '男'
                    : '女'}*/}
                <Card  title='第一天的标题' date='2017.3.30' index={1}/>
                <Card  title='第二天的标题' date='2017.3.30' index={2}/>
                <Card  title='第三天的标题' date='2017.3.30' index={3}/>
                {data.map((item) => 
                             < Card {...item}/> 
           
                )}
       {/*return <Card 
                 title={item.title} 
                                date={item.date} 
                                index={item.idnex}
                            />*/}
            </div>
        );
    }
}
//默认属性
App.defaultProps = {
    bg: '#0f0',
    color: 'red',
    pad: 80
    

}
//类型检测   
App.propTypes={
    bg:PropTypes.string,
    pad:PropTypes.number
    
}


export default App;