import React, { Component } from 'react';

import  Header from './component/Header';
import  bg from './images/01.png';

class App extends Component {
  
    render() {
        return (
            <div className='container' >
                <Header style={{background:`url(${bg})`}}  />
            {/**
             *  <img src={bg} alt="pic"/>
             */}
            </div>
            
        );
    }
}

export default App;

