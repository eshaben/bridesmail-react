import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './components/Navigation.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
         <Navigation />
       </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
