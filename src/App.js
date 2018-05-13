import React, { Component } from 'react';
import Client from './Client.js';
import Server from './Server.js';
import Database from './Database.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Client />
        <Server />
        <Database />
      </div>
    );
  }
}

export default App;
