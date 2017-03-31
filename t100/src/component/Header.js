import React, { Component } from 'react';

class Header extends Component {
        
    render() {
         let btn=['首页','登录','注册']
         let btns=btn.map((x,index) => <li key={index}style={{
             listStyle:'none',
             float:'left'
         }}><a style={{
             color:'#808080',
	        display: 'block',
	        width: '64px',
	        height: '64px',
	        lineHeight: '64px',
	         textAlign: 'center'
         }}
          >{x}</a></li>
         )
    
        return (
            <div >
                <ul>
                {btns}
                </ul>       
            </div>
        );
    }
}

export default Header;