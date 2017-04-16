import React from 'react';
import { ButtonToolbar,Button,ProgressBar } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      now:20
    }
  }
  
  
  render () {
    if(this.state.now<101){
  this.setInterval=setInterval(()=> {
     this.setState({
       now:this.state.now++
     });
  }, 1000);

    }else{
      clearInterval(this.setInterval)
    }
    return(
       <ButtonToolbar>      
          <ProgressBar now={this.state.now} label={`${this.state.now}%`} srOnly />
          <Button bsStyle="info">Info</Button>
            <Button bsStyle="danger">Danger</Button>
           </ButtonToolbar>
    )
  }
}

export default App;
