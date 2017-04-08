import React, { Component } from 'react';
// import {Route,Router,browseHistory} from 'react-router';
import {Route,Router,browserHistory,IndexRoute } from 'react-router';

import Home from './Home.js';
import About from './About.js';
import Work from './Work.js';
import Detail from './detail.js';
import Blog from './Blog.js';


   function checkAdmin(replace) {
    let r= confirm('你是超级用户?');
    if(!r){
       replace('/');
    }
        
    }

class Routes extends Component {
 
    render() {
            let App=() => <div>hello</div>;
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Home}>
              <IndexRoute component={App} />
                  <Route path='/About' component={About} onEnter={checkAdmin}/>
                  <Route path='/Work' component={Work}>
                    <Route path='/Blog/:title' component={Blog}/>
    
                    <Router path='detal' component={Detail}></Router>
                  </Route>

         </Route>
            </Router>
        );
    }
}

export default Routes;
//browserHistory 需要服务器支持,保证每次返回是我们的index.js
//hasHistory  bu