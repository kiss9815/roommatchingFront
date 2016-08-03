import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-role="page">
          <div data-role="header" className="row">
              <div className="col-xs-4">
                  <a href="#" className="ui-btn ui-corner-all ui-shadow ui-icon-home ui-btn-icon-left">Home</a>
              </div>
              <div className="col-xs-4">
                  
              </div>
              
              <div className="col-xs-4">
                  <div data-role="collapsible" data-collapsed="true">
                      <h1>Click me - I'm collapsible!</h1>
                      <p>I'm now expanded by default.</p>
                  </div>
              </div>
              
              
          </div>
          
          <div data-role="navbar">
              <ul>
                  <li><a href="#anylink">Home</a></li>
                  <li><a href="#anylink">Page Two</a></li>
                  <li><a href="#anylink">Search</a></li>
              </ul>
        </div>

          <div data-role="main" className="ui-content">
              <p>Notice that we have added the CSS class of "ui-corner-all" and "ui-shadow" to the header buttons, to make them look a bit more desirable.</p>
          </div>
          </div>
    );
  }
}

export default App;
