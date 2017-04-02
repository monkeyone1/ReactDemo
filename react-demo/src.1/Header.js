import React, { Component } from 'react';
class Header extends Component {
  render() {
    let color ='green';
    let style1={color:{backgroud:'#ff0'},height:{height:'200px'},text:{textDecoration:'underline'}}
    let style={color:color,height:'53px'}
    return (
      <div className='Header' >
        <h1 style={style}>Header</h1>
        <h1 style={Object.assign({},style1.color,style1.height,style1.text)} >hello</h1>
      </div>
    );
  }
}

export default Header;


