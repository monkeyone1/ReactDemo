import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state={
            input:'aaa',
            textarea:'',
            radio:'B',
            checks:['a']
        }
    }
    
    handleInput(aaa,e){
        console.log(e.target.value);
        this.setState({
            [aaa]:e.target.value,
            
        });
    }
    // handleSubmit=(e) => {
    //  e.preventDefault();
    //  e.stopPropagation();
    //  console.log(this.state.input);
    //  console.log(this.refs.input.value);
    //  console.log(this.state);
    // }
    // handleTextarea=(event) => {
    //     event.preventDefault();
    //     this.setState({
    //         textarea:event.target.value
    //     });
    // }
    // handleRadio=(e) => {
    //     this.setState({
    //         radio:e.target.value
    //     });
    // }
    // handleCheck=(e) => {
        
    // }
    render() {
        return (
            <div>
            <form action="" onSubmit={this.handleSubmit}>
            <input onChange={
                this.handleInput.bind(this,'input')
            } type="text" value={this.state.input}/>
            <input type="text" defaultValue='aaadss' ref='input'/>
            <input type="textarea" onChange={this.handleTextarea} value={this.state.handleInput}/>
            <input type="radio" name="Radio" value='aaa'onChange={this.handleInput.bind(this,'radio')}/>
            <input type="radio" name="Radio" value='bbb'onChange={this.handleInput.bind(this,'radio')}/>
            <input type="radio" name="Radio" value='ccc'onChange={this.handleInput.bind(this,'radio')}/>

            a<input type="checkbox" name='checks' value='a' onChange={this.handleCheck}/>
            b<input type="checkbox" name='checks' value='b' onChange={this.handleCheck}/>
            c<input type="checkbox" name='checks' value='c' onChange={this.handleCheck}/>
            <button type='submit'>submit</button>
            </form>
            </div>
        );
    }
}

export default Form;

//受控组件
//onChange 
//非受控组件
