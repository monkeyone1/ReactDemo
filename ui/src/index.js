import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
render(<MuiThemeProvider><App /></MuiThemeProvider>,document.getElementById('root'));
