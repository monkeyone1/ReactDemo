import React, { Component } from 'react';

class Header extends Component {
    render() {
        let style={
            root:{
                borderBottom:'1px solid #ccc',
                padding:'20px 0'
            },
            btn:{
                float:'right'
            }
            
        }
        return (
            <div style={style.root} className='clearfix'>
                <h1 style={{float:'left'}}>title</h1>
                <div style={style.btn}>
                <button>注册</button>
                <button>登入</button>
                    <button>推出</button>

                </div>
            </div>
        );
    }
}

export default Header;
