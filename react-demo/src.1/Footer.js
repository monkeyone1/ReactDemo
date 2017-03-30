import React from 'react';


function Footer() {
    function getStyle () {
       return({
            color:'green',
            
       })

    }
    let  style={
        a:{color:'red'}
    }
    return (
    
        <div className='Footer'>
            <p style={style.a}>这里是Footer</p>
        </div>
    )
}
export default Footer;