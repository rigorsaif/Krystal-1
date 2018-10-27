import React, { Component } from 'react';
import './App.css';
import MessageObject from './components/MessageObject.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Krystal</h1>
        <MessageObject />
      </div>
    );
  }
}

export default App;
