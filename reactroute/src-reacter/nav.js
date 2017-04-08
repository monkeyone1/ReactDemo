import React, { Component } from 'react';
import {Link} from 'react-router';

class Nav extends Component {
    render() {
        return (
            <div>
                 <Link to='/about' >about</Link>
               <Link to='/' >home</Link>
               <Link to='/work'>work</Link>
 
            </div>
        );
    }
}

export default Nav;