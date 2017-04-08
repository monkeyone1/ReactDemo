import React, { Component } from 'react';
import Test from './Test';


class App extends Component {

constructor() {
    super();
   this.state={
       num:0,
       show:true
   }
    console.log('这个是constructor');
    
}

componentWillMount() {
    console.log('componentWillMount');
}

componentDidMount() {
    console.log('componentDidMount');

}
shouldComponentUpdate(nextProps,nextState){
    // if(nextState.num>10){
    // console.log('shouldComponentUpdate');
    // console.log(this.state.num);

    // return false;}
    return true;
}
componentWillUpdate(nextProps,nextState) {
    console.log('componentWillUpdate');
    console.log(nextProps,nextState);
}
componentDidUpdate(nextProps,nextState) {
    console.log('componentDidUpdate');
}


handleClick(){
    this.setState((prevState) => ({
        num:prevState.num+20
    }))
}

heandleHello=() => {
    console.log('hello');
}


    render() {
        console.log('render');
        this.heandleHello();
        return (
            <div>
                当前数量{this.state.num}
                <button onClick={this.handleClick.bind(this)}>+1</button>
               { this.state.show ?<Test num={this.state.num}/>:null}
            </div>

        );
    }
}

export default App;
//getDefaultProps-->getInitialState