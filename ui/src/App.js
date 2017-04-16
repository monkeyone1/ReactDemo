import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
class App extends React.Component {
  constructor() {
    super();
    
  }
  
  
  render () {
    
  
    return(
      <div>
        <AppBar
    title="知乎日报"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        </Drawer>

      </div>
    )
  }
}

export default App;
